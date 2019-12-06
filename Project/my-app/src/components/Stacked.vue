<template>
  <div class="stacked" style="margin-right:15px;margin-left:15px">
    <div class="alert alert-info" role="alert" style="width:82%">
        Click on the buttons to adjust chart type and to add/remove groups
    </div>
    <div id="div1" style="margin-bottom:15px;margin-left:120px">
        <button button type="button" class="btn btn-outline-dark active" data-toggle="button" aria-pressed="true" autocomplete="off" id="stacked">Stacked</button>
        <button button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" autocomplete="off" id="grouped">Grouped</button>
        <button type="reset" class="btn btn-outline-dark" id="reset">Reset</button>
    </div>
    <div class="btn-group" role="group" aria-label="Basic example" id="series" style="text-align:left;margin-left:120px">
    </div>
    <div id="div3">
        <svg ref="stacked_age"></svg>
    </div>
</div>
</template>

<script>
import * as d3v5 from 'd3v5'
  export default {
    name: 'Stacked',
    props: {
    dataset: {
      type: Array,
      }
    }, 
    mounted() {
        console.log(this.dataset)
    
        var clickbtn;
        var stack = d3v5.stack();
        var formatPercent = d3v5.format(".0%");
        var formatNumber = d3v5.format("");
        var seriesNames_org = ['1–14 years','15–24 years','25–44 years','45–64 years','65 years and over'];
        var years = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016];

        ///////////////////////////
        // BUTTONS
        var div = d3v5.select('body').select('#series')
        seriesNames_org.forEach((el,i) => {
            div.append('button')
                .attr('id','btn_'+i)
                .attr("class","btn btn-outline-dark active")
                .text(el)
        });

        function transitionGrouped() {
            d3v5.select('button[id=stacked]').classed('active',false)
            d3v5.select('button[id=stacked]').classed('aria-pressed',"false")
            d3v5.select('button[id=grouped]').classed('active',true)
            d3v5.select('button[id=grouped]').classed('aria-pressed',"true")
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
            d3v5.select('button[id=stacked]').classed('active',true)
            d3v5.select('button[id=stacked]').classed('aria-pressed',"true")
            d3v5.select('button[id=grouped]').classed('active',false)
            d3v5.select('button[id=grouped]').classed('aria-pressed',"false")
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
            layers = stack.keys(d3v5.range(n))(data)
            yStackMax = d3v5.max(layers, function(layer) { return d3v5.max(layer, function(d) { return d[1]; }); })
            yGroupMax = d3v5.max(layers, function(layer) { return d3v5.max(layer, function(d) { return d[1] - d[0]; }); })
            
            y = d3v5.scaleLinear()
                .domain([0, yStackMax])
                .rangeRound([height, 0]);

            yAxis = d3v5.axisLeft()
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
            
                d3v5.select('button[id=stacked]').classed('active',true)
                d3v5.select('button[id=stacked]').classed('aria-pressed',"true")
                d3v5.select('button[id=grouped]').classed('active',false)
                d3v5.select('button[id=grouped]').classed('aria-pressed',"false")
        }



        // BASIC CHART ELEMENTS (svg, xaxis, yaxis label, color, legend)
        var margin = {top: 20, right: 200, bottom: 50, left: 120},
            width = 1060 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        var svg = d3v5.select(this.$refs["stacked_age"])
            .attr("viewBox", [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom])
            //.attr("width", width + margin.left + margin.right)
            //.attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var x = d3v5.scaleBand()
            //.domain(d3v5.range(m))
            .domain(years)
            .rangeRound([0, width])
            .padding(0.1)
            .align(0.1);

        var xAxis = d3v5.axisBottom()
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

        var color = d3v5.scaleOrdinal()
            .domain(seriesNames_org.map(function(i){return seriesNames_org.indexOf(i);}))
            //.range(d3v5.schemeYlOrRd[9].reverse());
            //.range(d3v5.schemeGreys[7]);
            .range(d3v5.schemeBlues[8].reverse());
            

        var n, y, yAxis, layers, yStackMax, yGroupMax, rect;

        create_legend();

        var data_org = this.dataset;

        var seriesNames = [...seriesNames_org]
        // transpose data
        var data = []
        seriesNames.forEach((el,i)=>data.push( data_org[i][el] ));
        
        data = data[0].map(function(col, i) { 
            return data.map(function(row) { 
                return row[i] 
            })
        });
        clickbtn = function(){
            var el = this
            var ids
            if(el.classList.contains("active")){ // currently selected, now unselect
                d3v5.select(el).classed('active',false).attr("aria-pressed","false");
                ids = Array.from(d3v5.select('#series').selectAll('button[aria-pressed=false]')._groups[0])
                    .map(btn=>parseInt(btn.id.split('_')[1]))
                ids = seriesNames_org.map((d,i)=>i).filter(d=>!ids.includes(d)); 
                
                seriesNames = ids.map(id=>seriesNames_org[id])
        
                data = data_org.filter(function(d){
                    return seriesNames.includes(Object.keys(d)[0]);
                })
            }
            else{ // currently unselected, now select
                d3v5.select(el).classed('active',true)
                    .attr("aria-pressed","true");

                ids = Array.from(d3v5.select('#series').selectAll('button[aria-pressed=true]')._groups[0])
                    .map(btn=>parseInt(btn.id.split('_')[1]))
                ids = seriesNames_org.map((d,i)=>i).filter(d=>ids.includes(d)); 
                
                seriesNames = ids.map(id=>seriesNames_org[id])
        
                data = data_org.filter(function(d){
                    return seriesNames.includes(Object.keys(d)[0]);
                })
            }
            var data1 = []
            seriesNames.forEach(function(el,i){
                data1.push( data[i][el] )});

            // if all are getting unselected, do not allow it
            if(data1.length==0){
                d3v5.select(el).classed('active',true).attr("aria-pressed","true");
                //updateChart([],[])
                return;
            }
            data = data1[0].map(function(col, i) { 
                return data1.map(function(row) { 
                    return row[i] 
                })
            });
            updateChart(data,seriesNames)
        }
        
        updateChart(data,seriesNames);

        d3v5.select('button[id=stacked]').on('click',transitionStacked)
        d3v5.select('button[id=grouped]').on('click',transitionGrouped)
        d3v5.select('button[id=reset]').on('click',function(){
            d3v5.select('#series').selectAll('button').classed('active',true).attr("aria-pressed","true")
            seriesNames = [...seriesNames_org]
            data = []
            seriesNames.forEach((el,i)=>data.push( data_org[i][el] ));
            data = data[0].map(function(col, i) { 
                return data.map(function(row) { 
                    return row[i] 
                })
            });
            updateChart(data,seriesNames)   
        })
        d3v5.select('#series').selectAll('button').on('click',clickbtn)
        }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>