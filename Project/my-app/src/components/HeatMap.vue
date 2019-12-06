<template>
  <div class="heatmap">
      <div class="container" style="margin:25px">
    <div class="alert alert-info" role="alert" style="width:82%">
        Click on the buttons to adjust color range to highlight across years or age groups, and then hover on corresponding axis.
    </div>
    <div class="row">
    <div class="col1" style="margin-top:15px;margin-bottom:15px;margin-left:120px">
        <button type="button" class="btn btn-outline-dark active" data-toggle="button" aria-pressed="true" autocomplete="off" id="overall">Overall</button>
        <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" autocomplete="off" id="yr">Year</button>
        <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" autocomplete="off" id="grp">Age Group</button>  
    </div>
    <div class="col2 my-auto">
        <span id="annot1">Irrespective of the year, death rates of older groups were substantially higher than younger groups;</span>
        <br>
        <span id="annot2">except in the case of 1-14 years and 15-24 years age groups which displayed closer rates.</span>
    </div>
    </div>
    <div>
        <svg ref="heatmap_age"></svg>
    </div>
      </div>
</div>
</template>

<script>
import * as d3v5 from 'd3v5'
  export default {
    name: 'HeatMap',
    props: {
    dataset: {
      type: Array,
      }
    }, 
    mounted() {

        var annots ={"overall":"Irrespective of the year, death rates of older groups were substantially higher than younger groups;__except in the case of 1-14 years and 15-24 years age groups which displayed closer rates.",
        "year":"Over the period of 2006-2016, the  distribution of death rates across age groups starting from__1 years of age have stayed constant.",
        "age":"Consistent decline in death rates over time can only be seen in the case of the__1-14 years of age group"
        }

        ///////////////////////////
        // CONSTRUCT SVG
        var n_yrs = 11;
        var n_grps = 5;
        var margin = {top: 40, right: 10, bottom: 10, left: 120},
            width = 900,
            height = (width/n_yrs)*n_grps;

        var svg = d3v5.select(this.$refs["heatmap_age"])
            .attr("viewBox", [0, 0, width + margin.left + margin.right,height + margin.top + margin.bottom])
            //.attr("width", width + margin.left + margin.right)
            //.attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        data = this.dataset
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
        function getMin(nums){
            return Math.floor(d3v5.min(nums) / 100.0) * 100;
        }
        function getMax(nums){
            return Math.ceil(d3v5.max(nums) / 100.0) * 100;
        }

        var x = d3v5.scaleBand().domain(yrs).range([0, width]).paddingInner(0.05);
        var y = d3v5.scaleBand().domain(grps).range([0, height]).paddingInner(0.05);
        
        
        function mkcolor(min_ceil,max_ceil){ 
            color = new Map()

            d3v5.range(min_ceil,min_ceil+max_ceil,max_ceil/9).map(function(n){
            color.set(n,d3v5.scaleQuantize([min_ceil,max_ceil], d3v5.schemeBlues[9])(n));
            //color.set(n,d3v5.scaleQuantize([min_ceil,max_ceil], d3v5.schemePurples[9])(n));
            
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

        var grp, yr, grps, yrs, grp_ind, yr_ind, color_grps, color_grp, color_yr, data_yr, data, data_grps, yr_data, nums, num_grp, num_grps, num_yr, rect, color;
        var num_yrs=[];
        var color_yrs=[];
        var data_yrs=[];
        yrs.forEach(yr => {
            num_yr= data.filter(function(d){return d['Year']==yr;}).flatMap(function(r){
            return [r[grps[0]], r[grps[1]], r[grps[2]], r[grps[3]],r[grps[4]]];
            });
            num_yrs.push(num_yr);
            color_yr = mkcolor(d3v5.min(num_yr),d3v5.max(num_yr));
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
            color_grp = mkcolor(d3v5.min(num_grp),d3v5.max(num_grp));
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
            .attr('font-size','12px')
            .text(function(d){return d;});

        // grps axis (y)
        svg.append('g')
            .attr('class','y')
            .selectAll('text')
            .data(grps)
            .enter()
            .append('text')
            .attr('id',function(d){return 'y_'+ grp2ind(d);})
            .attr('x',0)
            .attr('y',function(d){return y(d)+y.bandwidth()/2;})
            .attr('dx','-1em')
            .attr('text-anchor','end')
            .attr('font-size','12px')
            .text(function(d){return d;});
        
        svg.append('g')
            .attr('class','cells')
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
            .attr('stroke',d=>clr(color_all,d))
            .attr('stroke-width',0);
            
            // create text on boxes
            svg.select("#col_"+yr)
            .selectAll('text')
            .data(yr_data)
            .enter()
            .append('text')
            .attr('class','textOnBox')
            .attr('id',function(d,i){return yr+'_'+i;})
            .attr('x',x(yr)+x.bandwidth()/2)
            .attr('y',function(d,i){return y(grps[i])+y.bandwidth()/2;})
            .attr('width',x.bandwidth())
            .attr('height',y.bandwidth())
            .attr('font-size','12px')
            .attr('text-anchor','middle')
            .attr('alignment-baseline','center')
            .text(function(d,i){return yr_data[i];})

            // mouseover for rect
            var tmp_fill = 'black'
            d3v5.selectAll('rect').on("mouseenter", function() {
                rect = this
                tmp_fill = d3v5.select(this).attr('fill')
                d3v5.select(this)
                .attr('fill',d3v5.rgb(tmp_fill).brighter(0.99))
                .attr('stroke',d3v5.rgb(tmp_fill).darker(0.5))
                .attr('stroke-width',2);
                yr = this.id.split('_')[0]
                grp_ind =  this.id.split('_')[1]
                d3v5.select('#x_'+yr).attr('font-weight','bold');
                d3v5.select('#y_'+grp_ind).attr('font-weight','bold');
            })
            .on("mouseout", function() {
                d3v5.select(this).attr('fill',tmp_fill)
                .attr('stroke',d3v5.rgb(tmp_fill))
                .attr('stroke-width',0);
                d3v5.select('#x_'+yr).attr('font-weight','normal');
                d3v5.select('#y_'+grp_ind).attr('font-weight','normal');
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
                d3v5.select(this).attr('font-weight','bold');
                yr = this.id.split('_')[1];
                d3v5.select('g[class=cells]').selectAll('rect').transition().style('opacity',function () {
                return (this.getAttribute('class').includes('yr'+yr)) ? 1.0 : 0;
                });
                d3v5.select('g[class=cells]').selectAll('text').transition().style('opacity',function () {
                return (this.getAttribute('id').includes(yr+'_')) ? 1.0 : 0;
                });
            })
            .on("mouseout", function() {
                d3v5.select('g[class=cells]').selectAll('rect,text').transition().style('opacity',1.0);
                d3v5.select(this).attr('font-weight','normal');
            });
            xaxis_event=true;
        }
        var enable_mouseover_yaxis = function(){
            if(yaxis_event){return;}
            svg.selectAll('g.y').selectAll('text')  
            .on("mouseover", function() {
                d3v5.select(this).attr('font-weight','bold');
                grp = this.id.split('_')[1];
                d3v5.select('g[class=cells]').selectAll('rect').transition().style('opacity',function () {
                    return (this.getAttribute('class').includes('grp'+grp)) ? 1.0 : 0;
                });
                d3v5.select('g[class=cells]').selectAll('text').transition().style('opacity',function () {
                    return (this.getAttribute('id').includes('_'+grp)) ? 1.0 : 0;
                });
            })
            .on("mouseout", function() {
                d3v5.select('g[class=cells]').selectAll('rect,text').transition().style('opacity',1.0);
                d3v5.select(this).attr('font-weight','normal');
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

        // BUTTONS FUNCTIONALITY
        d3v5.select("button[id=overall]").on('click', function(){
            d3v5.select("#annot1").text(annots.overall.split("__")[0])
            d3v5.select("#annot2").text(annots.overall.split("__")[1])
            d3v5.select('button[id=yr]').classed('active',false)
            d3v5.select('button[id=grp]').classed('active',false)
            d3v5.select('button[id=overall]').classed('active',true)
            d3v5.select('button[id=overall]').attr('aria-pressed',"true")
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
        })
        d3v5.select("button[id=yr]").on('click', function(){
            d3v5.select("#annot1").text(annots.year.split("__")[0])
            d3v5.select("#annot2").text(annots.year.split("__")[1])
            d3v5.select('button[id=overall]').classed('active',false)
            d3v5.select('button[id=grp]').classed('active',false)
            d3v5.select('button[id=yr]').classed('active',true)
            d3v5.select('button[id=yr]').attr('aria-pressed',"true")
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
        })

        d3v5.select("button[id=grp").on('click', function(){
            d3v5.select("#annot1").text(annots.age.split("__")[0])
            d3v5.select("#annot2").text(annots.age.split("__")[1])
            d3v5.select('button[id=yr]').classed('active',false)
            d3v5.select('button[id=overall]').classed('active',false)
            d3v5.select('button[id=grp]').classed('active',true)
            d3v5.select('button[id=grp]').attr('aria-pressed',"true")
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
        })
        
        d3v5.select('button[id=yr]').classed('active',false)
        d3v5.select('button[id=grp]').classed('active',false)
        d3v5.select('button[id=overall]').classed('active',true)
        d3v5.select('button[id=overall]').attr('aria-pressed',"true")

    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		.col1,.col2,.row:after {
			box-sizing: border-box;
		}
        .col1 {
			float: right;
			margin-left: 50px;
		}

		.col2 {
            transform: translate(2%, 0%);
            background-color:#ebebeb;
            /*border: 1px solid black;*/
            /*padding-left: 5px;
            padding-right: 5px */
            padding:10px

		}
		/* Clear floats after the columns */
		.row:after {
			content: "";
			display: table;
			clear: both;
		}
</style>