<template>
  <div class="simplebarchart">
    <svg ref="mysvg"/>
  </div>
</template>

<script>
import * as d3 from 'd3v5'
  export default {
    name: 'SimpleBarChart',
    props: {
    dataset: { //access in component using this.dataset
      type: Array,
      }
    },
    mounted() {
        var links =["Diseases of heart",
        "Malignant neoplasms",
        "Chronic lower respiratory diseases",
        "Accidents",
        "Cerebrovascular diseases",
        "Alzheimers disease",
        "Diabetes mellitus",
        "Influenza and pneumonia",
        "nill",
        "Intentional self-harm"]

        var margin = { top: 20, left: 0, bottom: 100, right: 10 };
        var width = 900 - margin.left - margin.right;
        var height = 300 - margin.top - margin.bottom;

        var svg = d3.select(this.$refs["mysvg"])
            //.attr('viewbox',[0,0,width ,height+ margin.top + margin.bottom])
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
        
        var x = d3.scaleBand()
          .domain(this.dataset.map(function (d) { return d.key; }))
          .range([0, width])
          .paddingInner(0.05);

        var y = d3.scaleLinear()
          .domain([0, d3.max(this.dataset, function (d) { return d.value; })])
          .range([height, 0]);

        svg.selectAll(".bar1")
          .data(this.dataset, function (d) { return d.key; })
          .enter().append("rect")
          .attr("id",function(d,i){links[i].replace(/ /g,'_')})
          .attr("fill","#8a89a6")
          .attr("stroke","black")
          .attr("stroke-width","0")
          .attr("class", "bar1")
          .attr("x", function (d) { return x(d.key)+15; })
          .attr("y", function (d) { return y(d.value); })
          .attr("width", x.bandwidth()-30)
          .attr("height", function (d) { return height - y(d.value); })
          .append("title")
          .text(function(d){return "Deaths: "+d3.format(",.0f")(d.value*2712630/100000.0)+" hundred thousand";});
        var xAxis = d3.axisBottom().scale(x);
        //var yAxis = d3.axisLeft().scale(y);

        var gxAxis = svg.append("g")
          .attr("class", "axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        
        gxAxis.selectAll('.tick').selectAll('text') // select all the x tick texts
        .attr('font-size','12px')
        .call(function(t){                
            t.each(function(d){ // for each one
              var self = d3.select(this);
              var s = self.text().split('__');  // get the text and split it
              self.text(''); // clear it out
              self.append("tspan") // insert two tspans
                .attr("x", 0)
                .attr("dy","1.5em")
                .text(s[0]);
              self.append("tspan")
                .attr("x", 0)
                .attr("dy","1.2em")
                .text(s[1]);
            })
        });

        /*var annot = svg.append('g')
                    .attr("transform", "translate("+width/1.02+"," + height/20 + ")")
                    .attr('font-size',"15px")
                    .attr('font-family','Avenir, Helvetica, Arial, sans-serif')
                    .attr('color','#5883BB')
                    .attr('text-anchor','end')
                    .attr("class","lead")
                    
        annot.append("text")
                .attr("x",0)
                .attr("y",0)
            .text("During 1999-2016, +2.7 mil fatalities occured in the US")
        annot.append("text")
                .attr("x",0)
                .attr("y",'1.2em')
            .text("The 10 most fatal diseases accounted for")
        annot.append("text")
                .attr("x", 0)
                .attr("dy","2.4em")
            .text("3 out of 4 deaths during 1999-2016")
        
        var annot2 = svg.append('g')
                    .attr("transform", "translate("+(0)+"," + (height+margin.bottom/1.1) + ")")
                    .attr('font-size',"15px")
                    .attr('color','#5883BB')
                    .attr('text-anchor','start')
                    .attr("class","lead")
        annot2.append("text")
                .attr("x", 0)
                .attr("y",0)
            .text("Of these diseases, 9 are also among the top 5 in one or more states (as depicted below)")
*/


        /*svg.append("g")
          .attr("class", "axis")
          .call(yAxis);*/
      //});


    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->