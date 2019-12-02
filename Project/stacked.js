// TODO change color

/** 
 * Data format: e.g. 2 series (different age groups) for 4 yrs each
 *  [{series1:[x,x,x,x]},{series2:[x,x,x,x]}]
 * **/

var clickbtn;
var stack = d3.stack();
var formatPercent = d3.format(".0%");
var formatNumber = d3.format("");
var seriesNames_org = ['1–14 years','15–24 years','25–44 years','45–64 years','65 years and over'];
var years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016];

///////////////////////////
// BUTTONS
div = d3.select('body').select('#series')
seriesNames_org.forEach((el,i) => {
    div.append('button')
        .attr('id','btn_'+i)
        .attr("class","btn btn-outline-dark active")
        .text(el)
});

function transitionGrouped() {
    d3.select('button[id=stacked]').classed('active',false)
    d3.select('button[id=stacked]').classed('aria-pressed',"false")
    d3.select('button[id=grouped]').classed('active',true)
    d3.select('button[id=grouped]').classed('aria-pressed',"true")
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
    d3.select('button[id=stacked]').classed('active',true)
    d3.select('button[id=stacked]').classed('aria-pressed',"true")
    d3.select('button[id=grouped]').classed('active',false)
    d3.select('button[id=grouped]').classed('aria-pressed',"false")
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
        .data(seriesNames_org)
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

function updateChart(data,seriesNames){
    svg.selectAll(".layer").remove()
    svg.selectAll(".yaxis").remove()
    
    n = seriesNames.length;
    layers = stack.keys(d3.range(n))(data)
    yStackMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d[1]; }); })
    yGroupMax = d3.max(layers, function(layer) { return d3.max(layer, function(d) { return d[1] - d[0]; }); })
    
    y = d3.scaleLinear()
        .domain([0, yStackMax])
        .rangeRound([height, 0]);

    yAxis = d3.axisLeft()
        .scale(y)
        .tickSize(2)
        .tickPadding(6);
    
    var layer = svg.selectAll(".layer")
        .data(layers)
        .enter().append("g")
        .attr("class", "layer")
        .attr("id", function(d) { 
            return d.key; 
        })
        .style("fill", function(d, i) { 
            return color(seriesNames_org.indexOf(seriesNames[i])); 
        });
    rect = layer.selectAll("rect")
        .data(function(d) { return d; })
        .enter().append("rect")
        .attr("x", function(d, i) { return x(years[i]); })
        .attr("y", height)
        .attr("width", x.bandwidth())
        .attr("height", 0);

    rect.transition()
        .delay(function(d, i) {return i * 10; })
        .attr("y", function(d) { return y(d[1]); })
        .attr("height", function(d) { 
            return Number.isNaN(y(d[0]) - y(d[1]))? 0:(y(d[0]) - y(d[1])); 
        });

    svg.append("g")
        .attr("class", "yaxis")
        .attr("transform", "translate(" + 0 + ",0)")
        .style("font-size", "10px")
        .call(yAxis);
    
        d3.select('button[id=stacked]').classed('active',true)
        d3.select('button[id=stacked]').classed('aria-pressed',"true")
        d3.select('button[id=grouped]').classed('active',false)
        d3.select('button[id=grouped]').classed('aria-pressed',"false")
}



// BASIC CHART ELEMENTS (svg, xaxis, yaxis label, color, legend)
var margin = {top: 20, right: 200, bottom: 50, left: 100},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleBand()
    //.domain(d3.range(m))
    .domain(years)
    .rangeRound([0, width])
    .padding(0.1)
    .align(0.1);

var xAxis = d3.axisBottom()
    .scale(x)
    .tickSize(0)
    .tickPadding(6);

svg.append("g")
    .attr("class", "xaxis")
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

var color = d3.scaleOrdinal()
    .domain(seriesNames_org.map(function(i){return seriesNames_org.indexOf(i);}))
    .range(d3.schemeYlOrRd[9].reverse());

var n, y, yAxis, layers, yStackMax, yGroupMax, rect;

create_legend();

d3.json("Data/stacked.json").then(function(data_org){

    seriesNames = [...seriesNames_org]
    // transpose data
    data = []
    seriesNames.forEach((el,i)=>data.push( data_org[i][el] ));
    
    data = data[0].map(function(col, i) { 
        return data.map(function(row) { 
            return row[i] 
        })
    });
    console.log(data)

    updateChart(data,seriesNames);

    d3.select('button[id=stacked]').on('click',transitionStacked)
    d3.select('button[id=grouped]').on('click',transitionGrouped)

    clickbtn = function(){
        el = this
        if(el.classList.contains("active")){ // currently selected, now unselect
            console.log(el)
            d3.select(el).classed('active',false).attr("aria-pressed","false");
            ids = Array.from(d3.select('#series').selectAll('button[aria-pressed=false]')._groups[0])
                .map(btn=>parseInt(btn.id.split('_')[1]))
            ids = seriesNames_org.map((d,i)=>i).filter(d=>!ids.includes(d)); 
            console.log(ids)
            
            seriesNames = ids.map(id=>seriesNames_org[id])
    
            data = data_org.filter(function(d){
                return seriesNames.includes(Object.keys(d)[0]);
            })
            console.log(seriesNames);
            console.log(data);
        }
        else{ // currently unselected, now select
            d3.select(el).classed('active',true)
                .attr("aria-pressed","true");

            ids = Array.from(d3.select('#series').selectAll('button[aria-pressed=true]')._groups[0])
                .map(btn=>parseInt(btn.id.split('_')[1]))
            ids = seriesNames_org.map((d,i)=>i).filter(d=>ids.includes(d)); 
            console.log(ids)
            
            seriesNames = ids.map(id=>seriesNames_org[id])
    
            data = data_org.filter(function(d){
                return seriesNames.includes(Object.keys(d)[0]);
            })
            console.log(seriesNames);
            console.log(data);
        }
        data1 = []
        seriesNames.forEach(function(el,i){
            console.log(el);
            console.log(data[i])
            data1.push( data[i][el] )});
        console.log(data1)
        
        data = data1[0].map(function(col, i) { 
            return data1.map(function(row) { 
                return row[i] 
            })
        });
        updateChart(data,seriesNames)
    }
    d3.select('#series').selectAll('button').on('click',clickbtn)
});