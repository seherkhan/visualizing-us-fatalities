// TODO MAKE CHECKBOXES HIDE UNHIDE SERIES

//filesrc = "stacked_dummydata.json";
filesrc = "Data/stacked.json";
/** 
 * Data format: e.g. 2 series (different age groups) for 4 yrs each
 *  [[x,x,x,x][x,x,x,x]]
 * **/


var stack = d3.stack(); //,
//data = d3.range(n).map(function() { return bumpLayer(m, .1); });

var formatPercent = d3.format(".0%");
var formatNumber = d3.format("");
var seriesNames = ['1–14 years','15–24 years','25–44 years','45–64 years','65 years and over'];
var n = seriesNames.length;
var years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016];


///////////////////////////
// BUTTONS

/*options = d3.select('body')
  .append('aside')
  .append('p').text('Select barchart type: ')
  .append('select');
options.append('option').attr('value','stacked').text('Stacked');
options.append('option').attr('value','grouped').text('Grouped');*/

/*
checkboxes = d3.select('body')
  .append('aside');
checkboxes.append('p').text('Groups visible: ')
seriesNames.forEach(function(series, i){
    checkboxes.append('input')
        .attr('type','checkbox')
        .attr('id','checkbox'+i)
        .attr('checked','true')
    checkboxes.append('label')
        .attr('for','checkbox'+i)
        .text(series)
        .style('padding-right','10px')
});

*/


d3.json(filesrc).then(function(data){
    // transpose data
    data = data[0].map(function(col, i) { 
        return data.map(function(row) { 
            return row[i] 
        })
    });

    var layers = stack.keys(d3.range(n))(data),
        yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d[1]; }); }),
        yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d[1] - d[0]; }); });

    var margin = {top: 20, right: 200, bottom: 50, left: 100},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scaleBand()
        //.domain(d3.range(m))
        .domain(years)
        .rangeRound([0, width])
        .padding(0.1)
        .align(0.1);

    var y = d3.scaleLinear()
        .domain([0, yStackMax])
        .rangeRound([height, 0]);

    /*var color = d3.scaleLinear()
        .domain([0, n - 1])
        .range(["#aad", "#556"]);*/
    var color = d3.scaleOrdinal().domain(seriesNames.map(function(i){return seriesNames.indexOf(i);}))
    //    .range(["#1B234A","#3e4b87","#2263B8","#82B6D5","#cfcbbc"]);
        .range(d3.schemeYlOrRd[9].reverse());

    var xAxis = d3.axisBottom()
        .scale(x)
        .tickSize(0)
        .tickPadding(6);

    var yAxis = d3.axisLeft()
        .scale(y)
        .tickSize(2)
        .tickPadding(6);

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var layer = svg.selectAll(".layer")
        .data(layers)
    .enter().append("g")
        .attr("class", "layer")
        .attr("id", function(d) { 
            return d.key; 
        })
        .style("fill", function(d, i) { return color(i); });

    var rect = layer.selectAll("rect")
        .data(function(d) { return d; })
    .enter().append("rect")
        .attr("x", function(d, i) { return x(years[i]); })
        .attr("y", height)
        .attr("width", x.bandwidth())
        .attr("height", 0);

    rect.transition()
        .delay(function(d, i) {return i * 10; })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { return y(d[0]) - y(d[1]); });

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
    
    //xlab
    svg.append('text')
        .attr('x',width/2)
        .attr('y',height+margin.bottom/1.5)
        .attr('text-anchor','middle')
        .attr('alignment-baseline','center')
        .text('Years')
        .style('font-size',14);
    
    //ylab
    svg.append('text')
        .attr('x',-margin.left/2.8)
        .attr('y',height/2)
        .attr('text-anchor','end')
        .attr('alignment-baseline','center')
        .text('Death Rate')
        .style('font-size',14);

    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + 0 + ",0)")
        .style("font-size", "10px")
        .call(yAxis);

    function transitionGrouped() {
        d3.select('button[id=stacked]').classed('unselected',true)
        d3.select('button[id=grouped]').classed('unselected',false)
        y.domain([0, yGroupMax]);

        rect.transition()
            .duration(500)
            .delay(function(d, i) { return i * 10; })
            .attr("x", function(d, i) { return x(years[i]) + x.bandwidth() / n * parseInt(this.parentNode.id); })
            .attr("width", x.bandwidth() / n)
        .transition()
            .attr("y", function(d) { return height - (y(d[0]) - y(d[1])); })
            .attr("height", function(d) { return y(d[0]) - y(d[1]); });

        yAxis.tickFormat(formatNumber)
        svg.selectAll(".y.axis").transition()
            .delay(500)
            .duration(500)
            .call(yAxis)
    }

    function transitionStacked() {
        d3.select('button[id=grouped]').classed('unselected',true)
        d3.select('button[id=stacked]').classed('unselected',false)
        y.domain([0, yStackMax]);

        rect.transition()
            .duration(500)
            .delay(function(d, i) { return i * 10; })
            .attr("y", function(d) { return y(d[1]); })
            .attr("height", function(d) { return y(d[0]) - y(d[1]); })
        .transition()
            .attr("x", function(d, i) { return x(years[i]); })
            .attr("width", x.bandwidth());

        yAxis.tickFormat(formatNumber)
        svg.selectAll(".y.axis").transition()
            .delay(500)
            .duration(500)
            .call(yAxis)

    }
    function create_legend(){
        var size = 20;
        var gap = 10+size;
        var font_size = 12
        var enter_select = svg.append("g")
            .attr("class","legend")
            .attr("transform", "translate(" + (width) + "," + 0+ ")")
            .selectAll('rect')
            .data(seriesNames)
            .enter();
        enter_select.append('rect')
            .attr('x',0)
            .attr('y',function(d,i){return gap*i;})
            .attr('width',size)
            .attr('height',size)
            .attr('fill',function(d,i){return color(i);});
        enter_select.append('text')
            .attr('x',gap)
            .attr('y',function(d,i){return gap*i+size/2;})
            .attr('text-anchor','start')
            .attr('alignment-baseline','center')
            .text(function(d){return d})
            .style('font-size',font_size);
    }
    d3.select('button[id=grouped]').classed('unselected',true)

    d3.select('button[id=stacked]').on('click',transitionStacked)
    d3.select('button[id=grouped]').on('click',transitionGrouped)
    create_legend();
});