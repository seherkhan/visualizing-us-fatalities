<template>
  <div class="stackedbar">
    <div class="container" style="margin:25px">
        <p>In this visualization we've grouped our datapoints on the basis of Category (Gender, Origin, and Race).
            Selector buttons should be used to select a particular Category. Each group in the chart represents a particular disease,
            which helps to see the overall trend of these diseases over the years in context to a particular Category.
        </p>
        
        <div class="alert alert-info" role="alert">
                Click on the button to see individual trends for Diseases over the past decade
        </div>
        <hr class="my-5">
        <button type="button" class="btn btn-outline-danger active" data-toggle="button" aria-pressed="true" id="AP">All Persons</button>  
        <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="M">Male</button>
        <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="F">Female</button>
        <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="W">White</button>
        <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="BAA">Black or African American</button>        
        <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="AIA">American Indian or Alaska Native</button><br/>
        <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="API">Asian or Pacific Islander</button>   
        <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="HL">Hispanic or Latino</button>
        <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="WHL">White, not Hispanic or Latino</button>
        <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="BHL">Black, not Hispanic or Latino</button>              
    </div>
    <br/><br/>
    <svg ref="stackbar"></svg>
    <div id='barchart'></div>
    <br/><br/><br/>
    <div id="tooltip"></div>
  </div>
</template>

<script>
import * as d3 from 'd3v5'
  export default {
    name: 'StackedBar',
    props: {
    dataset: {
      type: Array,
      }
    }, //svgx = d3.select(this.$refs["stackbar"])
    mounted() {
       var widthx = 1500;
            var heightx = 400;
            var marginx = {top: 20, right: 50, bottom: 25, left: 50}

            var svgx = svgx = d3.select(this.$refs["stackbar"])
                //.append('svg')
                .attr('id', 'svg-bar')
                .attr('viewBox', [0, 0, widthx, heightx])
                //.attr('width', widthx)
                //.attr('height', heightx)
                .append('g')
                .attr('transform', 'translate('+ (widthx) +', '+ heightx +')');

            
            var datax, modex, allx;
            var keys = ["1950", "1960", "1970", "1980", "1990", 
                "1995", "2000", "2005", "2010", "2014", "2015", 
                "2016"];

            var colorx = d3.scaleOrdinal()
                .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a8a29e", "#a05d56", "#d0743c", "#ff8c00", "#ebaf8a", "#d4bfb2", "#807c7a", "#bababa"])

            var groupKey = "disease_id";
            var x0 = d3.scaleBand();
            var x1 = d3.scaleBand();
            var y = d3.scaleLinear();
            
            var d = this.dataset;
            datax = d.slice(0,7);
            modex = 'AP';
            allx = d;
            drawBarChart();

            //#AP, #M, #F, #W, #BAA, #AIA, #API, #HL, #WHL, #BHL

            d3.select('#AP').on('click', function() {
                if(modex != 'AP'){
                    d3.select('#AP').classed('active', true).attr('aria-pressed', "true");
                    d3.select('#M').classed('active', false);
                    d3.select('#F').classed('active', false);
                    d3.select('#W').classed('active', false);
                    d3.select('#BAA').classed('active', false);
                    d3.select('#AIA').classed('active', false);
                    d3.select('#API').classed('active', false);
                    d3.select('#HL').classed('active', false);
                    d3.select('#WHL').classed('active', false);
                    d3.select('#BHL').classed('active', false);
                    datax = allx.slice(0, 7);
                    modex = 'AP';
                    drawBarChart();
                }
            });

            d3.select('#M').on('click', function() {
                if(modex != 'M'){
                    d3.select('#M').classed('active', true).attr('aria-pressed', "true");
                    d3.select('#AP').classed('active', false);
                    d3.select('#F').classed('active', false);
                    d3.select('#W').classed('active', false);
                    d3.select('#BAA').classed('active', false);
                    d3.select('#AIA').classed('active', false);
                    d3.select('#API').classed('active', false);
                    d3.select('#HL').classed('active', false);
                    d3.select('#WHL').classed('active', false);
                    d3.select('#BHL').classed('active', false);
                    datax = allx.slice(7, 14);
                    modex = 'M';
                    drawBarChart();
                }
            });

            d3.select('#F').on('click', function() {
                if(modex != 'F'){
                    d3.select('#F').classed('active', true).attr('aria-pressed', "true");
                    d3.select('#M').classed('active', false);
                    d3.select('#AP').classed('active', false);
                    d3.select('#W').classed('active', false);
                    d3.select('#BAA').classed('active', false);
                    d3.select('#AIA').classed('active', false);
                    d3.select('#API').classed('active', false);
                    d3.select('#HL').classed('active', false);
                    d3.select('#WHL').classed('active', false);
                    d3.select('#BHL').classed('active', false);
                    datax = allx.slice(14, 21);
                    modex = 'F';
                    drawBarChart();
                }
            });

            d3.select('#W').on('click', function() {
                if(modex != 'W'){
                    d3.select('#W').classed('active', true).attr('aria-pressed', "true");
                    d3.select('#M').classed('active', false);
                    d3.select('#F').classed('active', false);
                    d3.select('#AP').classed('active', false);
                    d3.select('#BAA').classed('active', false);
                    d3.select('#AIA').classed('active', false);
                    d3.select('#API').classed('active', false);
                    d3.select('#HL').classed('active', false);
                    d3.select('#WHL').classed('active', false);
                    d3.select('#BHL').classed('active', false);
                    datax = allx.slice(21, 28);
                    modex = 'W';
                    drawBarChart();
                }
            });

            d3.select('#BAA').on('click', function() {
                if(modex != 'BAA'){
                    d3.select('#BAA').classed('active', true).attr('aria-pressed', "true");
                    d3.select('#M').classed('active', false);
                    d3.select('#F').classed('active', false);
                    d3.select('#W').classed('active', false);
                    d3.select('#AP').classed('active', false);
                    d3.select('#AIA').classed('active', false);
                    d3.select('#API').classed('active', false);
                    d3.select('#HL').classed('active', false);
                    d3.select('#WHL').classed('active', false);
                    d3.select('#BHL').classed('active', false);
                    datax = allx.slice(28, 35);
                    modex = 'BAA';
                    drawBarChart();
                }
            });

            d3.select('#AIA').on('click', function() {
                if(modex != 'AIA'){
                    d3.select('#AIA').classed('active', true).attr('aria-pressed', "true");
                    d3.select('#M').classed('active', false);
                    d3.select('#F').classed('active', false);
                    d3.select('#W').classed('active', false);
                    d3.select('#BAA').classed('active', false);
                    d3.select('#AP').classed('active', false);
                    d3.select('#API').classed('active', false);
                    d3.select('#HL').classed('active', false);
                    d3.select('#WHL').classed('active', false);
                    d3.select('#BHL').classed('active', false);
                    datax = allx.slice(35, 42);
                    modex = 'AIA';
                    drawBarChart();
                }
            });

            d3.select('#API').on('click', function() {
                if(modex != 'API'){
                    d3.select('#API').classed('active', true).attr('aria-pressed', "true");
                    d3.select('#M').classed('active', false);
                    d3.select('#F').classed('active', false);
                    d3.select('#W').classed('active', false);
                    d3.select('#BAA').classed('active', false);
                    d3.select('#AIA').classed('active', false);
                    d3.select('#AP').classed('active', false);
                    d3.select('#HL').classed('active', false);
                    d3.select('#WHL').classed('active', false);
                    d3.select('#BHL').classed('active', false);
                    datax = allx.slice(42, 49);
                    modex = 'API';
                    drawBarChart();
                }
            });

            d3.select('#HL').on('click', function() {
                if(modex != 'HL'){
                    d3.select('#HL').classed('active', true).attr('aria-pressed', "true");
                    d3.select('#M').classed('active', false);
                    d3.select('#F').classed('active', false);
                    d3.select('#W').classed('active', false);
                    d3.select('#BAA').classed('active', false);
                    d3.select('#AIA').classed('active', false);
                    d3.select('#API').classed('active', false);
                    d3.select('#AP').classed('active', false);
                    d3.select('#WHL').classed('active', false);
                    d3.select('#BHL').classed('active', false);
                    datax = allx.slice(49, 56);
                    modex = 'HL';
                    drawBarChart();
                }
            });

            d3.select('#WHL').on('click', function() {
                if(modex != 'WHL'){
                    d3.select('#WHL').classed('active', true).attr('aria-pressed', "true");
                    d3.select('#M').classed('active', false);
                    d3.select('#F').classed('active', false);
                    d3.select('#W').classed('active', false);
                    d3.select('#BAA').classed('active', false);
                    d3.select('#AIA').classed('active', false);
                    d3.select('#API').classed('active', false);
                    d3.select('#HL').classed('active', false);
                    d3.select('#AP').classed('active', false);
                    d3.select('#BHL').classed('active', false);
                    datax = allx.slice(56, 63);
                    modex = 'WHL';
                    drawBarChart();
                }
            });

            d3.select('#BHL').on('click', function() {
                if(modex != 'BHL'){
                    d3.select('#BHL').classed('active', true).attr('aria-pressed', "true");
                    d3.select('#M').classed('active', false);
                    d3.select('#F').classed('active', false);
                    d3.select('#W').classed('active', false);
                    d3.select('#BAA').classed('active', false);
                    d3.select('#AIA').classed('active', false);
                    d3.select('#API').classed('active', false);
                    d3.select('#HL').classed('active', false);
                    d3.select('#WHL').classed('active', false);
                    d3.select('#AP').classed('active', false);
                    datax = allx.slice(63, 70);
                    modex = 'BHL';
                    drawBarChart();
                }
            });

            
            

            function legend(svgx) {
                var g = d3.select('#svg-bar')
                    .selectAll(".legends")
                    .data(colorx.domain().slice().reverse())
                    .enter()
                    .append("g")
                    .attr('class', 'legends')
                    .attr("transform", `translate(${widthx},0)`)
                    .attr("text-anchor", "end")
                    .attr("font-family", "sans-serif")
                    .attr("font-size", 10)
                    .attr("transform", (d, i) => `translate(${widthx - 35},${i * 20})`);

                g.append("rect")
                    .attr("x", -19)
                    .attr("width", 19)
                    .attr("height", 19)
                    .attr("fill", colorx);

                g.append("text")
                    .attr("x", -24)
                    .attr("y", 9.5)
                    .attr("dy", "0.35em")
                    .text(d => d);
                }

            

        function tooltipHtml(k, v){  /* function to create html content string in tooltip div. */
        return "<span>Year: "+k+"<br/>Spread: "+v+"</span>";
      }


        function drawBarChart() {
        d3.selectAll("rect").remove();
        d3.selectAll("g").remove();

        function mouseOver(d){
      d3.select("#tooltip").transition().duration(200).style("opacity", .9);      
      
      d3.select("#tooltip").html(tooltipHtml(d.key, d.value))  
        .style("left", (d3.event.pageX) + "px")     
        .style("top", (d3.event.pageY - 28) + "px");
    }
    
    function mouseOut(){
      d3.select("#tooltip").transition().duration(500).style("opacity", 0);      
    }

        x0.domain(datax.map(function(d) { return d['disease_id']; }))
            .rangeRound([marginx.left, widthx - marginx.right])
            .paddingInner(0.20);

        x1.domain(keys)
            .rangeRound([0, x0.bandwidth()])
            .padding(0.25);

        y.domain([0,  d3.max(datax, d => d3.max(keys, key => d[key]))]).nice()
            .rangeRound([heightx - marginx.bottom, marginx.top]);
            
        var xAxis = g => g
            .attr("transform", `translate(0,${heightx - marginx.bottom})`)
            .call(d3.axisBottom(x0).tickSizeOuter(0))
            .call(g => g.select(".domain").remove());

        var yAxis = g => g
            .attr("transform", `translate(${marginx.left},0)`)
            .call(d3.axisLeft(y).ticks(null, "s"))
            .call(g => g.select(".domain").remove())
            .call(g => g.select(".tick:last-of-type text").clone()
                .attr("x", 3)
                .attr("text-anchor", "start")
                .attr("font-weight", "bold")
                .text(datax.y)); 

        var svgroot =  d3.select('#svg-bar').selectAll(".inside")
                .data(datax);

        var svgx = svgroot
            .enter()
            .append("g")
            .attr('class', '.inside')
            .attr("transform", function(d) {
                return `translate(${x0(d['disease_id'])},0)`});

        var root = svgx.selectAll("rect")
            .data(d => keys.map(key => ({key, value: d[key]})))

        root
            .enter()
            .append("rect")
            //.transition().duration(800)
            .attr("x", function(d) {return x1(d.key) })
            .attr("y", d => y(d.value))
            .attr("width", x1.bandwidth())
            .attr("height", d => y(0) - y(d.value))
            .attr("fill", d => colorx(d.key));

        svgx.selectAll('rect').on("mouseover", mouseOver).on("mouseout", mouseOut); 

        root.exit().style('opacity', 0).remove();
        svgroot.exit().style('opacity', 0).remove();
                

        d3.select('#svg-bar').append("g")
            .call(xAxis);

        d3.select('#svg-bar').append("g")
            .call(yAxis);

        d3.select('#svg-bar').append("g")
            .call(legend);
        } 
    }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #tooltip {   
            position: absolute;           
            text-align: center;                      
            background:rgba(0,0,0,0.9);
            border:1px solid black;
            width:auto;
            color:white;
            pointer-events: none;  
            font-size: 12px;
            padding: 2px      
        }

    .bar {
        fill: #cce6ff; 
        shape-rendering: crispEdges;}

    body {
        margin: 20px;
    }
        
</style>