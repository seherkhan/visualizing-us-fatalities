<template>
  <div class="areawise" style="margin-right:15px;margin-left:15px">
			<h1 class="display-4">Area-wise Clustering</h1>		
			<p class="lead" >United States, 1999-2016. Instances of cancer occurance by type and location.</p>

    <div class="alert alert-info" role="alert">
          Click on the buttons to highlight type of disease
    </div>
    <div id="div2" style="margin-bottom:15px;">
        <div class="btn-group d-flex" role="group" aria-label="Basic example" id="btngroup1"></div>
        <div class="btn-group d-flex" role="group" aria-label="Basic example" id="btngroup2"></div>
        <div class="btn-group d-flex" role="group" aria-label="Basic example" id="btngroup3"></div>
    </div>
    <div id="div1">
      <svg id="bubble"></svg>
    </div>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  name: 'chart',
  mounted () {

    var color, format, width, height, pack, svg;

    var types = ["Lung and Bronchus", "Female Breast", "Prostate", "Colon and Rectum", "Non-Hodgkin Lymphoma", "Urinary Bladder", "Pancreas", "Melanomas of the Skin", "Leukemias", "Kidney and Renal Pelvis", "Corpus and Uterus NOS", "Liver and Intrahepatic Bile Duct", "Oral Cavity and Pharynx", "Thyroid", "Ovary", "Brain and Other Nervous System", "Stomach", "Myeloma", "Esophagus", "Cervix", "Larynx", "Hodgkin Lymphoma", "Testis", "Mesothelioma", "Kaposi Sarcoma"]

    var c = ["#08519c","#238b45","#737373","#d94801",
      "#2171b5","#41ab5d","#969696","#f16913",
      "#4292c6","#74c476","#bdbdbd","#fd8d3c",
      "#6baed6","#a1d99b","#d9d9d9","#fdae6b",
      "#9ecae1","#c7e9c0","#e0e0e0","#fdd0a2",
      "#c6dbef","#e5f5e0","#ededed","#fee6ce",
      "#deebf7"]

    var colors={}
    for(var i = 0; i<types.length;i++){
      colors[types[i]] = c[i];
    }

    
    function  createChart(json){
      d3.json(json).then(function(data){
      color = d3.scaleOrdinal().domain([0,5]).range(["#ededed","#bfbfbf","#e8d1cf","#b9b8d1","#a18ead"])
    
      format = d3.format(",d")
      width = 800
      height = width
    
      pack = data => d3.pack()
        .size([width, height])
        .padding(3)(
          d3.hierarchy(data).sum(d => d.value).sort((a, b) => b.value - a.value)
        )
      
      const root = pack(data);
      let focus = root;
      let view;
      
      svg = d3.select("body")
          .select("#div1")
          .select("#bubble")
          .attr("viewBox", `-${width / 2} -${height / 2} ${width} ${height}`)
          .style("display", "block")
          .style("background", color(0))
          .style("cursor", "pointer")
          .on("click", () => zoom(root));
      
        
    const node =  svg.append("g").selectAll("circle")
        .data(root.descendants().slice(1))
        .join("circle")
        .attr("fill", d => d.children ? color(d.depth) : 
          "white"
        )
        .attr("class",d => d.children ? "" :"circ"+d.data.name.replace(/ /g,"_"))
        .attr("stroke",d => d.children ? color(d.depth) : "white")
        .attr("stroke-width",10)
        .attr("stroke-opacity",0)
        .on("mouseover",function(d){
          if(d.children){
            d3.select(this).attr("stroke-dasharray", (10,1)).attr("stroke-opacity",1)
          }
          else{
            if(d.parent == focus){
            var txtel = d3.select(this.parentElement)
              .append('text')
              .attr('id','tmptext')
              .attr('text-anchor','middle')
              .attr('alignment-baseline','hanging')
              .attr('font','9px sans-serif')
              .attr('transform',this.getAttribute('transform'))
              .attr('dy','0.5em')
              .text(d3.format(",")(d.data.value)+" cases");
              
            
            }
          }
        })
        .on("mouseout", function(d) { 
          if(d.children){
            d3.select(this).attr("stroke-dasharray",null).attr("stroke-opacity",0)
          }
          else{
            d3.select("#tmptext").remove();
          }
          
        })
        .on("click", function(d){
          if(d.children){
            focus !== d && (zoom(d), d3.event.stopPropagation());
          }
        })
      
        const label = svg.append("g")
            .style("font", "12px sans-serif")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .attr("alignment-baseline","bottom")
          .selectAll("text")
          .data(root.descendants())
          .join("text")
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
              .duration(d3.event.altKey ? 7500 : 750)
              .tween("zoom", d => {
                const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
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
    });
    }

    createChart("bubblechart.json");

    ///////////////////////////
    // BUTTONS
    //var buttons = d3.select('#div2');
    var buttons = d3.select("#btngroup1")
    var key
    var colors1 = Object.entries(colors)
    colors1.slice(0,7).forEach(function(el){
        key=el[0]
        console.log(key)
        buttons.append('button')
        .attr('id',key.replace(/ /g,"_"))
        .text(key)
        .attr("class","btn btn-outline-dark")
        .attr("type","button")
        .on("click",function(){
          var currClr = svg.select(".circ"+this.id).attr("fill");
          if(currClr=="white"){
            d3.select(this)
              .style("background-color",colors[this.id.replace(/_/g," ")]);
              svg.selectAll(".circ"+this.id).attr("fill",colors[this.id.replace(/_/g," ")]); 
          }
          else{
            svg.selectAll(".circ"+this.id).attr("fill","white"); 
            d3.select(this)
              .style("background-color","white")
          }
        });
      }
    )
    buttons = d3.select("#btngroup2")
    colors1.slice(7,13).forEach(function(el){
        key=el[0]
        console.log(key)
        buttons.append('button')
        .attr('id',key.replace(/ /g,"_"))
        .text(key)
        .attr("class","btn btn-outline-dark")
        .attr("type","button")
        .on("click",function(){
          var currClr = svg.select(".circ"+this.id).attr("fill");
          if(currClr=="white"){
            d3.select(this)
              .style("background-color",colors[this.id.replace(/_/g," ")]);
              svg.selectAll(".circ"+this.id).attr("fill",colors[this.id.replace(/_/g," ")]); 
          }
          else{
            svg.selectAll(".circ"+this.id).attr("fill","white"); 
            d3.select(this)
              .style("background-color","white")
          }
        });
      }
    )
    buttons = d3.select("#btngroup3")
    colors1.slice(13,18).forEach(function(el){
        key=el[0]
        console.log(key)
        buttons.append('button')
        .attr('id',key.replace(/ /g,"_"))
        .text(key)
        .attr("class","btn btn-outline-dark")
        .attr("type","button")
        .on("click",function(){
          var currClr = svg.select(".circ"+this.id).attr("fill");
          if(currClr=="white"){
            d3.select(this)
              .style("background-color",colors[this.id.replace(/_/g," ")]);
              svg.selectAll(".circ"+this.id).attr("fill",colors[this.id.replace(/_/g," ")]); 
          }
          else{
            svg.selectAll(".circ"+this.id).attr("fill","white"); 
            d3.select(this)
              .style("background-color","white")
          }
        });
      }
    )
    buttons.append('div').append('button').attr('id',"reset")
        .text("Reset")
        .attr('class','btn btn-outline-dark')
        .on("click",function(){
          svg.selectAll("circle[class^=circ]").attr("fill","white");
          d3.select(this)
            .style("background-color","transparent")
          d3.selectAll('button').style('background-color',"transparent")
        });

  }
}
</script>