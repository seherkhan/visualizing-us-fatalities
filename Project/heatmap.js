filesrc = "heatmap.json";

// Transition for intervals - dekha jayega
// maybe set color scheme instead of opacity on mouse over
// reduce opacity of text on mouse hover


///////////////////////////
// BUTTONS
options = d3.select('body')
  .append('aside')
  .append('p').text('Set chart type to: ')
  .append('select')
  .attr('id','clrrng');
options.append('option').attr('value','percent').text('Percent');
options.append('option').attr('value','grouped').text('Grouped');
options.append('option').attr('value','stacked').text('Stacked');

///////////////////////////
// CONSTRUCT SVG
n_yrs = 11;
n_grps = 5;
var margin = {top: 40, right: 10, bottom: 10, left: 140},
width = 800,
height = (width/n_yrs)*n_grps;

var svg = d3.select("body")
  .append("svg")
  .style('background-color','#ffebbf')
  .attr("id","heatmap")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

///////////////////////////
// DEFINE DROP SHADOW
var defs = svg.append("defs");
var filter = defs.append("filter")
    .attr("id", "drop-shadow")
    .attr("height", "130%");
filter.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 5)
    .attr("result", "blur");

// translate output of Gaussian blur to the right and downwards with 2px
// store result in offsetBlur
filter.append("feOffset")
    .attr("in", "blur")
    .attr("dx", 5)
    .attr("dy", 5)
    .attr("result", "offsetBlur");

// overlay original SourceGraphic over translated blurred opacity by using
// feMerge filter. Order of specifying inputs is important!
var feMerge = filter.append("feMerge");

feMerge.append("feMergeNode")
    .attr("in", "offsetBlur")
feMerge.append("feMergeNode")
    .attr("in", "SourceGraphic");



d3.json(filesrc).then(function(data) {
  yrs = data.map(function(r){return r['Year'];});
  function yr2ind(yr){
    return yr-2006;
  }
  function grp2ind(grp){
    return grps.indexOf(grp);
  }
  grps = Object.keys(data[0]).slice(1);
  nums = data.flatMap(function(r){
    return [r[grps[0]], r[grps[1]], r[grps[2]], r[grps[3]],r[grps[4]]];
    });
  //console.log(nums);
  //console.log(yrs);
  //console.log(grps);
  function getMin(nums){
    return Math.floor(d3.min(nums) / 100.0) * 100;
  }
  function getMax(nums){
    return Math.ceil(d3.max(nums) / 100.0) * 100;
  }

  var x = d3.scaleBand().domain(yrs).range([0, width]).paddingInner(0.05);
  var y = d3.scaleBand().domain(grps).range([0, height]).paddingInner(0.05);
  
  
  function mkcolor(min_ceil,max_ceil){ 
    color = new Map()

    d3.range(min_ceil,min_ceil+max_ceil,max_ceil/9).map(function(n){
      color.set(n,d3.scaleQuantize([min_ceil,max_ceil], d3.schemeBlues[9])(n));
    });
    return color;
  }
  
  function clr(color,val){
    for(var [key, c] of color.entries()) {
      if(val<=key){
        return c;
      }
    }
    return Array.from(color.values()).pop();
  }

  var color_all = mkcolor(100,900);

  num_yrs=[];
  color_yrs=[];
  data_yrs=[];
  yrs.forEach(yr => {
    num_yr= data.filter(function(d){return d['Year']==yr;}).flatMap(function(r){
      return [r[grps[0]], r[grps[1]], r[grps[2]], r[grps[3]],r[grps[4]]];
    });
    num_yrs.push(num_yr);
    color_yr = mkcolor(d3.min(num_yr),d3.max(num_yr));
    color_yrs.push(color_yr);

    data_yr = data.filter(function(r){return r['Year']==yr})
      .map(function(r){
      return [r[grps[0]], r[grps[1]], r[grps[2]], r[grps[3]],r[grps[4]]];
      })[0];
    data_yrs.push(data_yr);
  });

  num_grps=[];
  color_grps=[];
  data_grps=[];
  grps.forEach(grp => {
    num_grp= data.flatMap(function(r){
      return r[grp];
    });
  
    num_grps.push(num_grp);
    color_grp = mkcolor(d3.min(num_grp),d3.max(num_grp));
    color_grps.push(color_grp);
  });

  // years axis (x)
  svg.append('g')
    .attr('class','x')
    .selectAll('text')
    .data(yrs)
    .enter()
    .append('text')
    .attr('id',function(d){return 'x_'+d;})
    .attr('x',function(d){return x(d)+x.bandwidth()/2;})
    .attr('y',0)
    .attr('dy','-1em')
    .attr('text-anchor','middle')
    .text(function(d){return d;});

  // grps axis (y)
  svg.append('g')
    .attr('class','y')
    .selectAll('text')
    .data(grps)
    .enter()
    .append('text')
    .attr('id',function(d){return 'y_'+d;})
    .attr('x',0)
    .attr('y',function(d){return y(d)+y.bandwidth()/2;})
    .attr('dx','-1em')
    .attr('text-anchor','end')
    .text(function(d){return d;})
    .on("mouseover", function() {
      //console.log(this.id);
    });
  
  svg.append('g')
    .selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('id',function(d){return 'col_'+d['Year'];})
    .attr('class',function(d){return 'col';});
    
  yrs.forEach(yr => {
    yr_data = data.filter(
        function(r){return r['Year']==yr;})
      .map(
        function(r){
          return [r[grps[0]], r[grps[1]], r[grps[2]], r[grps[3]],r[grps[4]]];
        })[0];

    // create boxes
    svg.select("#col_"+yr)
      .selectAll('rect')
      .data(yr_data)
      .enter()
      .append('rect')
      .attr('class',function(d,i){return 'yr'+yr+' '+'grp'+i;})
      .attr('id',function(d,i){return yr+'_'+i;})
      .attr('x',x(yr))
      .attr('y',function(d,i){return y(grps[i]);})
      .attr('width',x.bandwidth())
      .attr('height',y.bandwidth())
      .attr('fill',
        function(d){
          return clr(color_all,d);
        })
    
    // create text on boxes
    svg.select("#col_"+yr)
      .selectAll('text')
      .data(yr_data)
      .enter()
      .append('text')
      .attr('id',function(d,i){return yr+'_'+i;})
      .attr('x',x(yr)+x.bandwidth()/2)
      .attr('y',function(d,i){return y(grps[i])+y.bandwidth()/2;})
      .attr('width',x.bandwidth())
      .attr('height',y.bandwidth())
      .attr('fill','black')
      .attr('text-anchor','middle')
      .attr('alignment-baseline','center')
      .text(function(d,i){return yr_data[i];})

    // moveover for rect
    d3.selectAll('rect').on("mouseover", function() {
        rect = this
        d3.select(rect)
        .attr('stroke-width',2)
        .attr('stroke','black')
        //.style("filter", "url(#drop-shadow)")
        //.raise();
        /*g = this.parentNode
        d3.select(g)
          .append('text')
          .attr('x',x.bandwidth()/2 + parseFloat(rect.getAttribute('x')))
          .attr('y',y.bandwidth()/2 + parseFloat(rect.getAttribute('y'))) //this.getAttribute('y')) //+y.bandwidth()/2)
          .attr('id','hovertxt')
          .attr('text-anchor','middle')
          .attr('alignment-baseline','center')
          //.raise()
          .text(function(d){
            rect_id = rect.getAttribute('id');
            grp = rect_id.split('_')[rect_id.split('_').length-1];
            return d[grps[grp]];
          });*/
      })
      .on("mouseout", function() {
        d3.select(this)
        .attr('stroke-width',0)

        //.style("filter",""); 
        //d3.select('#hovertxt').remove();
      });
  });

  ////////
  // FUNCTIONS FOR AXIS EVENTS
  var xaxis_event = false;
  var yaxis_event = false;
  var enable_mouseover_xaxis = function(){
    if(xaxis_event){return;}
    svg.selectAll('g.x').selectAll('text')  
      .on("mouseover", function() {
        //console.log(this.id);
        yr = this.id.split('_')[1];
        d3.selectAll('rect').transition().style('opacity',function () {
          return (this.getAttribute('class').includes('yr'+yr)) ? 1.0 : 0.1;
        });
      })
      .on("mouseout", function() {
        d3.selectAll('rect').transition().style('opacity',1.0);
      });
      xaxis_event=true;
  }
  var enable_mouseover_yaxis = function(){
    if(yaxis_event){return;}
    svg.selectAll('g.y').selectAll('text')  
      .on("mouseover", function() {
        //console.log(this.id);
        grp = this.id.split('_')[1];
        d3.selectAll('rect').transition().style('opacity',function () {
          return (this.getAttribute('class').includes('grp'+grp2ind(grp))) ? 1.0 : 0.1;
        });
      })
      .on("mouseout", function() {
        d3.selectAll('rect').transition().style('opacity',1.0);
      });
      yaxis_event=true;
  }
  var disable_mouseover_xaxis= function(){
    svg.selectAll('g.x').selectAll('text').on("mouseover","").on("mouseout","");
    xaxis_event=false;
  }
  var disable_mouseover_yaxis= function(){
    svg.selectAll('g.y').selectAll('text').on("mouseover","").on("mouseout","");
    yaxis_event=false;
  }

  enable_mouseover_xaxis();
  enable_mouseover_yaxis();

  d3.select("#clrrng")
    .on("change", function () {
      if(this.value=="overall"){
        console.log('overall!');
        svg.selectAll("g[id^=col_]")
          .selectAll('rect')
          .attr('fill',function(){
              yr = this.id.split('_')[0];  
              yr_ind = yr2ind(yr);
              grp = this.id.split('_')[1];
              return clr(color_all,data_yrs[yr_ind][grp]);
          });
        enable_mouseover_xaxis();
        enable_mouseover_yaxis();
      }
      else if(this.value=="yr"){
        console.log('yr!');
        yrs.forEach(yr => {
          svg.select("#col_"+yr)
            .selectAll('rect')
            .attr('fill',function(){
              yr_ind = yr2ind(yr);
              grp = this.id.split('_')[1];
              return clr(color_yrs[yr_ind],data_yrs[yr_ind][grp]);
            })
        });
        enable_mouseover_xaxis();
        disable_mouseover_yaxis();
      }
      else if(this.value=="age"){
        console.log('age!');
        grps.forEach(grp => {
          grp_ind = grp2ind(grp);
          svg.selectAll('rect[id$=_'+grp_ind+']')
            .attr('fill',function(){
              yr = this.id.split('_')[0];
              yr_ind = yr2ind(yr);
              return clr(color_grps[grp_ind],data_yrs[yr_ind][grp_ind]);
            })
        });
        disable_mouseover_xaxis();
        enable_mouseover_yaxis();
      }
      else{
        console.log('Unexpected!');
        return;
      }
        
  });

  
    

});

