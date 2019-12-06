<template>
  <div class='expend'>
    <div class="container" style="margin:25px">
        <h1 class="display-4" style="font-size:25px;font-weight:bold;">Public healthcare expenditure</h1>
        <p>Assesing public healthcare spending patterns during 1960-2015, we find that the portion of spending by category has stayed consistent since at least 1990;<br>
        except in the case of hospital expenditures where changes have not been as sharp, and in the case of expenditure on dental services which saw a steep decline in last 5 years of the period.<p>
        <div class="alert alert-info" role="alert" style="width:82%">
            Hover over markers to see categorical spending for that year.
        </div>
        <div>
        <svg id="primary-area"/>
        <br/><br/>
        <div class="alert alert-info" role="alert" style="width:82%">
            Click on the areas above to see sources of spending on the following chart. Hover over bars to see percentages.
        </div>
        <svg id="secondary-area"/>
        </div>
        <div class="container" style="border:1px solid black">
            <p><u>Important Information:</u></p>
            <ul>
                <li><b>Hospital expenditures</b> include hospital-based nursing home and home health agency care.</li>
                <li><b>Home health care expenditures</b> include expenditures for care in freestanding facilities only. Additional services of this type are provided in hospital-based facilities and are considered hospital care.</li>
                <li><b>Nursing care facilities and continuing care retirement communities expenditures</b> include expenditures for care in freestanding nursing homes. Expenditures for care in hospital-based nursing homes are included with hospital care.</li>
                <li><b>Other expenditures</b> include expenditures for other professional services, other nondurable medical products, durable medical equipment, and other health, residential, and personal care, not shown separately.</li>
                <li><b>Other sources of payment</b> includes worksite health care, other private revenues, Indian Health Service, workers' compensation, general assistance, maternal and child health, vocational rehabilitation, other federal
    programs, Substance Abuse and Mental Health Services Administration, other state and local programs, and school health.</li>
            </ul>

            <p><u>References:</u></p>
            <ul>
                <li>Source - <a href='https://www.cdc.gov/nchs/data/hus/2017/095.pdf'></a></li>
                <li>National Center for Health Statistics. 2018. Available from: <a href='https://www.cdc.gov/nchs/products/nvsr.htm'>https://www.cdc.gov/nchs/products/nvsr.htm</a></li>
            </ul>
        </div>
    </div>
    <br/><br/><br/>
  </div>
</template>
<script>
import * as d3v5 from 'd3v5'
export default {
  name: 'expend',
  mounted () {
    var width = 1100;
    var height = 600;
    var margin = { top: 60, right: 200, bottom: 60, left: 150 }

    function create_legend(this_svg,this_keys,this_color){
        var size = 20;
        var gap = 10+size;
        var font_size = 12
        var enter_select = this_svg.append("g")
            .attr("class","legend")
            .attr("transform", "translate(" + (width-margin.right) + "," +margin.top+ ")")
            .selectAll('rect')
            .data(this_keys)
            .enter();
        enter_select.append('rect')
            .attr('x',gap)
            .attr('y',function(d,i){return gap*i;})
            .attr('width',size)
            .attr('height',size)
            .attr('fill',function(d,i){return this_color(d);})
            .attr('id',d=>key2filename(d));
        enter_select.append('text')
            .attr('x',2*gap)
            .attr('y',function(d,i){return gap*i+size/2;})
            .attr('text-anchor','start')
            .attr('alignment-baseline','center')
            .text(function(d){return d})
            .style('font-size',font_size);
    }

    var key2filename = function(key){
        return key.replace(/ /g,'_').replace(/\//,'-');
    }
    var filename2key = function(filename){
        return filename.replace(/_/g,' ').replace(/-/,'/');
    }

    d3v5.csv("area.csv").then(function(data)
    {
        data = Object.assign(data, { y: "expend", x: "year" });

        var keys = data.columns.slice(1);
        var series = d3v5.stack().keys(data.columns.slice(1))(data)
        var years = data.map(d=>+d.year);

        var area = d3v5.area()
            .x(function(d, i) {
                return x(d.data[data.x]);
            })
            .y0(d => y(d[0]))
            .y1(d => y(d[1]));
    
        var x = d3v5.scaleLinear()
            .domain(d3v5.extent(data, d => d.year))
            .range([margin.left, width - margin.right])
          
        var y = d3v5.scaleLinear()
            .domain([0, d3v5.max(series, d => d3v5.max(d, d => d[1]))]).nice()
            .range([height - margin.bottom, margin.top])
        
        var color = d3v5.scaleOrdinal()
            .domain(data.columns.slice(1))
            //.range(d3v5.schemeYlOrRd[9])
            .range(d3v5.schemeReds[9].slice(0,9).reverse())
            //.range(d3v5.interpolateRgb("#ffffcc", '#800026')[5])
            
        var xAxis = g =>
            g.attr("transform", `translate(0,${height - margin.bottom})`)
            .call(
                d3v5.axisBottom(x)
                    .ticks(width / 80)
                    .tickSizeOuter(0)
                    .tickFormat(d3v5.format("d"))
            ).append('text')
            .attr('dx',width/2)
            .attr('dy',30)
            .attr('fill','black')
            .attr("font-weight", "bold")
            .text('Years')

        var yAxis = g => g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3v5.axisLeft(y))
            //.call(g => g.select(".domain").remove())
            .append('text')
            .attr('dy',height/2)
            .attr('dx',-50)
            .attr('fill','black')
            .attr("font-weight", "bold")
            .text('Expenditure ($ bn)')
        
        
        const svg = d3v5.select('body')
            .select('#primary-area')
            .attr("viewBox", [0, 0, width, height])  
        svg.append('rect')
            .attr('x',margin.left)
            .attr('y',margin.top)
            .attr('width',width-margin.left-margin.right)
            .attr('height',height-margin.bottom-margin.top)
            .attr('fill','white')
            .on("click",function(){
                updateSecondaryChart("All");
                })
        svg.append("g").call(xAxis);
        svg.append("g").call(yAxis);
        svg.append('text')
            .attr('x',width/2)
            .attr('y',margin.top-10)
            .attr('fill','black')
            .attr("font-weight", "bold")
            .attr("text-anchor","middle")
            .text('Personal Health Care Expenditures, 1960–2016')
        create_legend(svg,keys,color);

        var tmp_fill='white';
        const path = svg
            .append("g")
            .selectAll("path")
            .data(series)
            .enter().append("path") //
            //.join("path")
            .attr('id',({key})=>key2filename(key))
            .attr("fill", ({ key }) => color(key))
            .attr('stroke','white')
            .attr('stroke-width',0)
            .attr("d", area)
            .on("mouseenter",function(){
                tmp_fill = this.getAttribute('fill');
                this.setAttribute('fill',d3v5.rgb(tmp_fill).brighter(0.3));
                this.setAttribute('stroke-width',1);

                svg.select('rect[id='+this.id+']').attr('fill',d3v5.rgb(tmp_fill).brighter(0.3));
                svg.select('rect[id='+this.id+']').attr('stroke-width',1);
            })
            .on("mouseout",function(){
                this.setAttribute('fill',tmp_fill);
                this.setAttribute('stroke-width',0);

                svg.select('rect[id='+this.id+']').attr('fill',tmp_fill);
                svg.select('rect[id='+this.id+']').attr('stroke-width',0);

                tmp_fill='white';
            })
            .on("click",function(d){
                updateSecondaryChart(key2filename(d.key));
                }
            )
            //.append("title")
            //.text(({ key }) => key);

        var marker_selection = svg.append("g")
            .selectAll("g")
            .data(series)
            .enter()

        for(var i=0;i<years.length;i++){
            marker_selection.append('circle')
                .attr('id',function(d){return d[i].data.year+'__'+key2filename(d.key);})
                .attr('cx',d=>x(d[i].data.year))
                .attr('cy',d=>y(d[i][1]))
                .attr('r','5')
                .attr('fill',({ key }) => color(key))
                .attr('stroke','white')
                .attr('stroke-width',1)
                .on("mouseenter",function(d){
                    var id_ = this.getAttribute('id')
                    var x_ = 10+parseFloat(this.getAttribute('cx'));
                    var y_ = 10+parseFloat(this.getAttribute('cy'));
                    var yr = id_.split('__')[0]
                    var type = filename2key(id_.split('__')[1])
                    var val = data.filter(d=>d.year==yr)[0][type]
                    var width = 180
                    var height = 40
                    d3v5.select(this.parentElement)
                        .append('rect')
                        .attr('id','tooltip_r')
                        .attr('x',x_)
                        .attr('y',y_)
                        .attr('width',width)
                        .attr('height',height)
                        .attr('fill','#2c3e50')
                        .attr('stroke','white');
                    d3v5.select(this.parentElement)
                        .append('text')
                        .attr('id','tooltip_t1')
                        .attr('x',x_+width/2)
                        .attr('y',y_)
                        .attr('dy','+1em')
                        .attr('fill','white')
                        .attr('text-anchor','middle')
                        .attr('alignment-baseline','center')
                        .text(type+",")
                    d3v5.select(this.parentElement)
                        .append('text')
                        .attr('id','tooltip_t2')
                        .attr('x',x_+width/2)
                        .attr('y',y_)
                        .attr('dy','+2.25em')
                        .attr('fill','white')
                        .attr('text-anchor','middle')
                        .attr('alignment-baseline','center')
                        .text(yr+": $"+val+" bn")
                })
                .on("mouseout",function(){
                    d3v5.select("#tooltip_r").remove()
                    d3v5.select("#tooltip_t1").remove()
                    d3v5.select("#tooltip_t2").remove()
                })
        }
        

        svg.select('.legend')
            .selectAll('rect')
            .on("mouseenter",function(){
                tmp_fill = this.getAttribute('fill');

                svg.select('path[id='+this.id+']').attr('fill',d3v5.rgb(tmp_fill).brighter(0.3));
                svg.select('path[id='+this.id+']').attr('stroke-width',1);

                this.setAttribute('fill',d3v5.rgb(tmp_fill).brighter(0.3));
                this.setAttribute('stroke-width',1);
            })
            .on("mouseout",function(){

                svg.select('path[id='+this.id+']').attr('fill',tmp_fill);
                svg.select('path[id='+this.id+']').attr('stroke-width',0);

                this.setAttribute('fill',tmp_fill);
                this.setAttribute('stroke-width',0);
                tmp_fill='white';
                d3v5.select('#tooltip').remove();
            })
            .on("click",function(){
                updateSecondaryChart(this.id);
                }
            )
    });


///////////////////////////////////////////////////////
// Secondary Chart
var x, y, color, xAxis, yAxis;
var makeSecondaryChart = function(keyfilename){
    d3v5.csv(keyfilename+'.csv',
        function(d){
            return {
                "year":+d["year"],
                "Out-of-pocket payments":+d["Out-of-pocket payments"],
                "Private health insurance":+d["Private health insurance"],
                "Public health insurance":+d["Public health insurance"],
                "Other":+d["Other"]
            };
        })
        .then(function(data){
            data.map(rec => rec['total']=rec["Out-of-pocket payments"]+rec["Private health insurance"]+rec["Public health insurance"]+rec["Other"])
        
            var keys = data.columns.slice(1);

            var series = d3v5.stack()
                .keys(keys)
                .offset(d3v5.stackOffsetExpand)(data)
          
            x = d3v5.scaleLinear()
                .range([margin.left, width - margin.right]);
            
            y = d3v5.scaleBand()
                .domain(data.map(d => d.year))
                .range([margin.top, height - margin.bottom])
                .padding(0.1);

            color = d3v5.scaleOrdinal()
                .domain(series.map(d => d.key))
                //.range(d3v5.quantize(t => d3v5.interpolateSpectral(t * 0.8 + 0.1), series.length).reverse())
                .range(d3v5.schemeReds[4].reverse())
                //.range(d3v5.schemeGreys[5].reverse())
                .unknown("#ccc");

            xAxis = g => g
                .attr("transform", `translate(0,${margin.top})`)
                .call(d3v5.axisTop(x).ticks(width / 100, "%"))
                .call(g => g.selectAll(".domain").remove());
            yAxis = g => g
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3v5.axisLeft(y).tickSizeOuter(0))
                .call(g => g.selectAll(".domain").remove());

            const svg = d3v5.select('body')
                .select('#secondary-area')
                .attr("viewBox", [0, 0, width, height])
                .style("overflow", "visible");

            svg.append("g")
                .attr('id','plot')
                .selectAll("g")
                .data(series)
                .enter().append("g")
                .attr("fill", d => color(d.key))
                .selectAll("rect")
                .data(function(d){return d;})
                //.data(d => d)
                //.join("rect")
                .enter()
                .append("rect")
                .attr("x", d => x(d[0]))
                .attr("y", (d, i) => y(d.data.year)+15)
                .attr("width", d => x(d[1]) - x(d[0]))
                .attr("height", y.bandwidth()-30)
                .append("title")
                .text(d=>d3v5.format(",.1%")(d[1]-d[0]));
                // TODO make custom tooltip

            svg.append("g")
                .call(xAxis);

            svg.append("g")
                .call(yAxis);
            
            // TITLE
            svg.append('text')
                .attr('id','title')
                .attr('x',width/2)
                .attr('y',margin.top/2)
                .attr('fill','black')
                .attr("font-weight", "bold")
                .attr("text-anchor","middle")
                .text('Sources of '+filename2key(keyfilename)+' Expenditures, 1960–2016');
            
            create_legend(svg,keys,color);

});
}

makeSecondaryChart('All')
var updateSecondaryChart = function(keyfilename){
    var svg = d3v5.select('#secondary-area');
    svg.select('#plot').remove();
    svg.select('#title')
        .text('Sources of '+filename2key(keyfilename)+' Expenditures, 1960–2016');

    d3v5.csv(keyfilename+'.csv',
        function(d){
            return {
                "year":+d["year"],
                "Out-of-pocket payments":+d["Out-of-pocket payments"],
                "Private health insurance":+d["Private health insurance"],
                "Public health insurance":+d["Public health insurance"],
                "Other":+d["Other"]
            };
        })
        .then(function(data){
            data.map(rec => rec['total']=rec["Out-of-pocket payments"]+rec["Private health insurance"]+rec["Public health insurance"]+rec["Other"])
        
        var keys = data.columns.slice(1);

        var series = d3v5.stack()
            .keys(keys)
            .offset(d3v5.stackOffsetExpand)(data);

        svg.append("g")
            .attr('id','plot')
            .selectAll("g")
            .data(series)
            .enter().append("g")
            .attr("fill", d => color(d.key))
            .selectAll("rect")
            .data(function(d){return d;})
            .enter()
            .append("rect")
            //.data(d => d)
            //.join("rect")
            .attr("x", d => x(d[0]))
            .attr("y", (d, i) => y(d.data.year)+15)
            .attr("width", d => x(d[1]) - x(d[0]))
            .attr("height", y.bandwidth()-30)
            .append("title")
            .text(d=>d3v5.format(",.1%")(d[1]-d[0]));

});
}
  }
}
</script>
