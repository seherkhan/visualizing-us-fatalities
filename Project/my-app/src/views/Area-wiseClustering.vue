<template>
  <div class="areawise">
    <div class="container" style="margin:25px">
      <h1 class="display-4" style="font-size:25px;font-weight:bold;">Clustering Highly Fatal Diseases by Region</h1>		
      <p>During 1999-2016, +2.7 mil fatalities occured in the US
      The 10 most fatal diseases accounted for
      3 out of 4 deaths during 1999-2016
      </p>
      <div class="alert alert-info" role="alert" style="width:82%">
          Hover over bars to display number of fatalities.
      </div>
      <SimpleBarChart v-bind:dataset ="dataset1" v-if="dataLoaded"/>
      <br>
      <p>Of these diseases, 9 are also among the top 5 in one or more states (as depicted below). Diseases of the heart and Malignant neoplasms are the top two diseases in each state.
    On the other hand, Diabetes and Pneumonia are in the top five in only one state each: the District of Columbia and Hawaii, respectively</p>
    
      <div class="alert alert-info" role="alert" style="width:82%">
          Click on the buttons to highlight type of disease. Click on the bubbles to explore regions of the US. Hover on innermost bubbles to display number of deaths of the state.
    </div>
    <div id="div" style="margin-bottom:15px;">
        <div class="btn-group d-flex" role="group" aria-label="Basic example" id="btngroup11"></div>
    </div>
    <div id="div1">
      <svg id="bubble1" style="border:1px solid #343A3F"></svg>
    </div>
    <br>
    </div>
    <br/><br/><br/>
  </div>
</template>
<script>
import * as d3v5 from 'd3v5'
import SimpleBarChart from '@/components/SimpleBarChart.vue';

export default {
  name: 'areawise',
  data() {
    return {
        dataLoaded: false,
        dataset1: []
    };
  },
  components: {
    SimpleBarChart
  },
  mounted () {
    var promise = d3v5.json("leadingdeath15.json");
    var view = this;
    promise.then(function(value) {
      view.dataset1 = value;
      view.dataLoaded = true;
    });

    var color, format, width, height, svg;

    //var types = ["Lung and Bronchus", "Female Breast", "Prostate", "Colon and Rectum", "Non-Hodgkin Lymphoma", "Urinary Bladder", "Pancreas", "Melanomas of the Skin", "Leukemias", "Kidney and Renal Pelvis", "Corpus and Uterus NOS", "Liver and Intrahepatic Bile Duct", "Oral Cavity and Pharynx", "Thyroid", "Ovary", "Brain and Other Nervous System", "Stomach", "Myeloma", "Esophagus", "Cervix", "Larynx", "Hodgkin Lymphoma", "Testis", "Mesothelioma", "Kaposi Sarcoma"]
    var types = ["Diseases of heart",
    "Malignant neoplasms",
    "Chronic lower respiratory diseases",
    "Cerebrovascular diseases",
    "Accidents",
    "Intentional self-harm",
    "Alzheimers disease",
    "Diabetes mellitus",
    "Influenza and pneumonia"]

    var c = ["#4e79a7","#59a14f","#9c755f","#f28e2b","#edc948","#7cf2b3",
    "#e15759","#b07aa1","#76b7b2","#ff9da7"];
    var colors={}
    for(var i = 0; i<types.length;i++){
      colors[types[i]] = c[i];
    }
    console.log(colors)
    
    function  createChart(json){
      d3v5.json(json).then(function(data){
      color = d3v5.scaleOrdinal().domain([0,5])
      //.range(["lightgray" /*"white"*/,"red","#cfcfcf","#ded3d3","#d9b4b4","#a18ead"])
      .range(["white","red","#a494b0","#8a556e","#803636","black"]) //#e8d1cf
      format = d3v5.format(",d")
      width = 800
      height = width
    
      var pack = data => d3v5.pack()
        .size([width, height])
        .padding(3)(
          d3v5.hierarchy(data).sum(d => d.value).sort((a, b) => b.value - a.value)
        )
      
      const root = pack(data);
      let focus = root;
      let view;
      
      svg = d3v5.select("body")
          .select("#div1")
          .select("#bubble1")
          .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
          .style("display", "block")
          .style("background", color(0))
          .style("cursor", "pointer")
          .on("click", () => zoom(root));
      
        
    const node =  svg.append("g").selectAll("circle")
        .data(root.descendants().slice(1))
        .enter()
        .append("circle")
        .attr("fill", d => d.children ? color(d.depth) : 
          "white"
        )
        .attr("class",d => d.children ? "" :"circ"+d.data.name.replace(/ /g,"_"))
        .attr("stroke",d => d.children ? color(d.depth) : "white")
        .attr("stroke-width",10)
        .attr("stroke-opacity",0)
        .on("mouseover",function(d){
          if(d.children){
            d3v5.select(this).attr("stroke-dasharray", (10,1)).attr("stroke-opacity",1)
          }
          else{
            if(d.parent == focus){
            var txtel = d3v5.select(this.parentElement)
              .append('text')
              .attr('id','tmptext')
              .attr('text-anchor','middle')
              .attr('alignment-baseline','hanging')
              .attr('font','9px sans-serif')
              .attr('transform',this.getAttribute('transform'))
              .attr('dy','0.5em')
              .text(d3v5.format(",")(d.data.value)+" cases");
              
            
            }
          }
        })
        .on("mouseout", function(d) { 
          if(d.children){
            d3v5.select(this).attr("stroke-dasharray",null).attr("stroke-opacity",0)
          }
          else{
            d3v5.select("#tmptext").remove();
          }
          
        })
        .on("click", function(d){
          if(d.children){
            focus !== d && (zoom(d), d3v5.event.stopPropagation());
          }
        })
      
        const label = svg.append("g")
            .style("font", "12px sans-serif")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline","bottom")
          .selectAll("text")
          .data(root.descendants())
          .enter()
          .append("text")
          .style("fill-opacity",
          d => d.parent === root ? 1 : 0)
          .style("display", 
            d => d.parent === root ? "inline" : "none")
            .text(function(d){ return d.data.name;
            });
      
        zoomTo([root.x, root.y, root.r * 2]);
      
        function zoomTo(v) {
          const k = width / v[2];
      
          view = v;
      
          label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
          node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
          node.attr("r", d => d.r * k);
        }
      
        function zoom(d) {
          const focus0 = focus;
      
          focus = d;
      
          const transition = svg.transition()
              .duration(d3v5.event.altKey ? 7500 : 750)
              .tween("zoom", d => {
                const i = d3v5.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
                return t => zoomTo(i(t));
              });
      
          label
            .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
            .transition(transition)
              .style("fill-opacity", d => d.parent === focus ? 1 : 0)
              .on("start", function(d){
                if (d.parent === focus) this.style.display = "inline"; 
              })
              .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; 
              });
        }
        // initially first button is always selected
        svg.selectAll("circle[class^=circ"+colors1[0][0].replace(/ /g,"_")+"]").attr("fill",colors1[0][1]);
    });
    }

    createChart("bubblechart_all.json")

    ///////////////////////////
    // BUTTONS
    var buttons = d3v5.select("#btngroup11")
    var key
    var colors1 = Object.entries(colors)
    
    colors1.forEach(function(el){
        key=el[0]
        buttons.append('button')
        .attr('id',key.replace(/ /g,"_"))
        .text(key)
        .attr("class","btn btn-outline-dark")
        .attr("type","button")
        .attr("data-toggle","button")
        .attr("aria-pressed","false")
        .attr("autocomplete","off")
        .on("click",function(){
          console.log(svg)
          var currClr = svg.select(".circ"+this.id).attr("fill");
          if(currClr=="white"){
              d3v5.select(this).attr("aria-pressed","true").classed('active',true)
              d3v5.select(this).select('div').style("background-color",colors[this.id.replace(/_/g," ")]);
              //d3v5.select('div[class=bar]').select('rect[id='+this.id+']').attr('fill',colors[this.id.replace(/_/g," ")])
              //console.log(d3v5.select('.bar').select('rect[id='+this.id+']'))
              svg.selectAll(".circ"+this.id).attr("fill",colors[this.id.replace(/_/g," ")]); 
          }
          else{
            svg.selectAll(".circ"+this.id).attr("fill","white"); 
            d3v5.select(this).attr("aria-pressed","false").classed('active',false)
            d3v5.select(this).select('div').style("background-color","lightgray");
          }
        })
        .append('div')
        .style("background-color","lightgray") //colors[key.replace(/_/g," ")])
        .style("height","4px");
      }
    )
    // initially first button is always selected
    d3v5.select("#"+colors1[0][0].replace(/ /g,"_")).attr("aria-pressed","true").classed('active',true)
    d3v5.select("#"+colors1[0][0].replace(/ /g,"_")).select('div').style("background-color",colors1[0][1]);
    
    // reset button
    buttons.append('button').attr('id',"reset")
        .text("Reset")
        .attr('class','btn btn-outline-danger')
        .on("click",function(){
          d3v5.selectAll('button').attr("aria-pressed","false").classed('active',false)
          svg.selectAll("circle[class^=circ]").attr("fill","white");
          d3v5.select("#"+colors1[0][0].replace(/ /g,"_")).attr("aria-pressed","true").classed('active',true)
          d3v5.select("#"+colors1[0][0].replace(/ /g,"_")).select('div').style("background-color","lightgray");
          svg.selectAll("circle[class^=circ"+colors1[0][0].replace(/ /g,"_")+"]").attr("fill",colors1[0][1]);
        })

  }
}
</script>
<style scoped>
p.svgtypetxt {
  font-family:Avenir, Helvetica, Arial, sans-serif;
  font-size:16px;
  line-height: 24;
  font-weight:300;
  color: black
}
</style>