<template>
  <div class="age1">
    <div class="container" style="margin:25px;">	
      <h1 class="display-4" style="font-size:25px;font-weight:bold;">Leading causes of death and numbers of deaths, by age: United States, 1980 and 2016</h1>
      <br/>
      <div class="alert alert-info" role="alert" style="width:82%">
          Click on the buttons with the age-range to compare the Causes of Deaths in 1980 and 2016.
      </div>
      <hr class="my-3">
      <button type="button" class="btn btn-outline-dark active" data-toggle="button" aria-pressed="true" id="under1">Under 1 year</button>
      <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="b1to4">1 - 4 years</button>
      <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="b5to14">5 - 14 years</button>
      <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="b15to24">15 - 24 years</button>
      <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="b25to44">25 - 44 years</button>
      <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="b45to64">45 - 64 years</button>   
      <button type="button" class="btn btn-outline-dark" data-toggle="button" aria-pressed="false" id="b64over">65 years and over</button>      
      <br/><br/>
      <table class="table" id="piee">
          <tr>
              <th>Pie Chart for Year 1980</th>
              <th>Pie Chart for Year 2016</th>
          </tr>
          <tr>
              <td><div id='pie1980'></div></td>
              <td><div id='pie2016'></div></td>
          </tr>
      </table><br/><br/>
    </div>
    <table class="table" id="infotab"></table><br/><br/><br/><br/>

    <div class="container">
      <p><u>Important Information:</u></p>
      <li>Starting with 1999 data, the rules for selecting <b>Chronic lower respiratory diseases (CLRD) and Pneumonia</b> as the underlying cause of death changed, 
          resulting in an increase in the number of deaths for CLRD and a decrease in the number of deaths for Pneumonia. 
          <b>Therefore, trend data for these two causes of death should be interpreted with caution.</b></li>
  
      <li>Between 1998 and 1999, the cause of death title for <b>Chronic obstructive pulmonary diseases (COPD) was renamed to Chronic lower respiratory diseases (CLRD).</b></li>
  
      <li><b>Starting with 2011 data, the rules for selecting Renal failure as the underlying cause of death were changed</b>, affecting the number of deaths in the Nephritis, nephrotic syndrome and nephrosis
          and Diabetes categories. Therefore, trend data for these two causes of death should be interpreted with caution.</li>
      
      <br/>
      <p><u>References:</u></p>
      <ul>
          <li>Source - <a href='https://www.cdc.gov/nchs/data/hus/2017/020.pdf'>https://www.cdc.gov/nchs/data/hus/2017/020.pdf</a></li>
          <li>Technical Notes in "Deaths: Final Data for 2011," available from: <a href='https://www.cdc.gov/nchs/data/nvsr/nvsr63/nvsr63_03.pdf'>https://www.cdc.gov/nchs/data/nvsr/nvsr63/nvsr63_03.pdf</a></li>
          <li>National Center for Health Statistics; vol 67. 2018. Available from: <a href='https://www.cdc.gov/nchs/products/nvsr.htm'>https://www.cdc.gov/nchs/products/nvsr.htm</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  name: 'age1',
  mounted () {

  var width = 600,
    height = 500,
    margin = 0

  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  var radius = Math.min(width, height) / 2 - margin;

  // append the svg object to the div called 'my_dataviz'
  var svg1980 = d3.select("#pie1980")
      .append("svg")
      .attr("viewBox", [0, 0, width, height])
      //.attr("width", width)
      //.attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var svg2016 = d3.select("#pie2016")
      .append("svg")
      .attr("viewBox", [0, 0, width, height])
      //.attr("width", width)
      //.attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  var dataset, all, mode;
  var color = d3.scaleOrdinal()
      .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
      .range(d3.schemePaired);

  d3.json('tabledata.json').then(function(data) { // CHANGED: added then
    dataset = data.slice(0, 10);
    //.attr('fill', function(d){ return(color(d.data['Rank'])) })
    all = data;
    mode = 'under1';
    drawTable();
    drawPieChart();
  });

  function drawPieChart() {
      //For 1980
        var pie = d3.pie()
            .value(function(d) {return +d['Deaths_1980']})
            .sort(null);

        var data_ready = pie(dataset);

        var u = svg1980.selectAll('path')
            .data(data_ready);


        u.enter()
        .append('path')
        .merge(u)
        .transition()
        .duration(800)
        .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(radius - 70))
        .attr('fill', function(d){ return(color(d.data['Rank'])) })
        .attr("stroke", "white")
        .style("stroke-width", "1px")
        .style("opacity", 1);


        //For 2016
        var pie2 = d3.pie()
            .value(function(d) {return +d['Deaths_2016']})
            .sort(null);

        var data_ready2 = pie2(dataset);

        var u2 = svg2016.selectAll('path')
            .data(data_ready2);

        u2.enter()
        .append('path')
        .merge(u2)
        .transition()
        .duration(1000)
        .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(radius - 70))
        .attr('fill', function(d){ return(color(d.data['Rank'])) })
        .attr("stroke", "white")
        .style("stroke-width", "1px")
        .style("opacity", 1);

        u2.exit().remove();
      }


      function drawTable() {
        var table = d3.select('body').select('#infotab');
        var headers = table.append('tr');

        var tr = table.selectAll('tr.data')
            .data(dataset)
            .enter()
            .append('tr');

        headers.append('th').text('Category');
        headers.append('th').text('Rank');
        headers.append('th').text('Color');
        headers.append('th').text('Causes of Death in 1980');
        headers.append('th').text('No. of Deaths in 1980');
        headers.append('th').text('Causes of Deaths in 2016');
        headers.append('th').text('No. of Deaths in 2016');

        tr.append('td').attr('class', 'category')
            .text(function(d) {if(d['index']%10 == 1) {return d['Category']} else {return d['Rank']}})
            .attr("rowspan", function(d) {if(d['index']%10 == 1) return 10});
        
        tr.append('td').attr('class', 'rank')
            .text(function(d) {if(d['index']%10 == 1) {return d['Rank']} else {return ''}})
            .style('background-color', function(d) {if(d['index']%10 == 1) {return 'white'} else {return d['Color']}});

        tr.append('td').attr('class', 'color')
            .text(function(d) {if(d['index']%10 == 1) {return ''} else {return d['Cause_1980']}})
            .style('background-color', function(d) {if(d['index']%10 == 1) {return d['Color']} else {return 'white'}})

        tr.append('td').attr('class', 'cause1980')
            .text(function(d) {if(d['index']%10 == 1) {return d['Cause_1980']} else {return d['Deaths_1980']}});

        tr.append('td').attr('class', 'deaths1980')
            .text(function(d) {if(d['index']%10 == 1) {return d['Deaths_1980']} else {return d['Cause_2016']}});

        tr.append('td').attr('class', 'cause2016')
            .text(function(d) {if(d['index']%10 == 1) {return d['Cause_2016']} else {return d['Deaths_2016']}});

        tr.append('td').attr('class', 'deaths2016')
            .text(function(d) {if(d['index']%10 == 1) {return d['Deaths_2016']}})
            .style('padding', function(d) {if(d['index']%10 != 1) {return 0}});
      } 

      //#under1, #b1to4, #b5to14, #b25to44, #b45to64, #b64over
      d3.select('#under1').on('click', function() {
        if(mode != 'under1'){
            d3.select('#under1').classed('active', true).attr('aria-pressed', "true");
            d3.select('#b1to4').classed('active', false);
            d3.select('#b5to14').classed('active', false);
            d3.select('#b15to24').classed('active', false);
            d3.select('#b25to44').classed('active', false);
            d3.select('#b45to64').classed('active', false);
            d3.select('#b64over').classed('active', false);
            dataset = all.slice(0, 10);
            mode = 'under1';
            filterTable();
            drawPieChart();
        }
      });

      d3.select('#b1to4').on('click', function() {
          if(mode != 'b1to4'){
              d3.select('#b1to4').classed('active', true).attr('aria-pressed', "true");
              d3.select('#under1').classed('active', false);
              d3.select('#b5to14').classed('active', false);
              d3.select('#b15to24').classed('active', false);
              d3.select('#b25to44').classed('active', false);
              d3.select('#b45to64').classed('active', false);
              d3.select('#b64over').classed('active', false);
              dataset = all.slice(10, 20);
              mode = 'b1to4';
              filterTable();
              drawPieChart();
          }
      });

      d3.select('#b5to14').on('click', function() {
          if(mode != 'b5to14'){
              d3.select('#b5to14').classed('active', true).attr('aria-pressed', "true");
              d3.select('#b1to4').classed('active', false);
              d3.select('#under1').classed('active', false);
              d3.select('#b15to24').classed('active', false);
              d3.select('#b25to44').classed('active', false);
              d3.select('#b45to64').classed('active', false);
              d3.select('#b64over').classed('active', false);
              dataset = all.slice(20, 30);
              mode = 'b5to14';
              filterTable();
              drawPieChart();
          }
      });

      d3.select('#b15to24').on('click', function() {
          if(mode != 'b15to24'){
              d3.select('#b15to24').classed('active', true).attr('aria-pressed', "true");
              d3.select('#b1to4').classed('active', false);
              d3.select('#b5to14').classed('active', false);
              d3.select('#under1').classed('active', false);
              d3.select('#b25to44').classed('active', false);
              d3.select('#b45to64').classed('active', false);
              d3.select('#b64over').classed('active', false);
              dataset = all.slice(30, 40);
              mode = 'b15to24';
              filterTable();
              drawPieChart();
          }
      });

      d3.select('#b25to44').on('click', function() {
          if(mode != 'b25to44'){
              d3.select('#b25to44').classed('active', true).attr('aria-pressed', "true");
              d3.select('#b1to4').classed('active', false);
              d3.select('#b5to14').classed('active', false);
              d3.select('#b15to24').classed('active', false);
              d3.select('#under1').classed('active', false);
              d3.select('#b45to64').classed('active', false);
              d3.select('#b64over').classed('active', false);
              dataset = all.slice(40, 50);
              mode = 'b25to44';
              filterTable();
              drawPieChart();
          }
      });

      d3.select('#b45to64').on('click', function() {
          if(mode != 'b45to64'){
              d3.select('#b45to64').classed('active', true).attr('aria-pressed', "true");
              d3.select('#b1to4').classed('active', false);
              d3.select('#b5to14').classed('active', false);
              d3.select('#b15to24').classed('active', false);
              d3.select('#b25to44').classed('active', false);
              d3.select('#under1').classed('active', false);
              d3.select('#b64over').classed('active', false);
              dataset = all.slice(50, 60);
              mode = 'b45to64';
              filterTable();
              drawPieChart();
          }
      });


      d3.select('#b64over').on('click', function() {
          if(mode != 'b64over'){
              d3.select('#b64over').classed('active', true).attr('aria-pressed', "true");
              d3.select('#b1to4').classed('active', false);
              d3.select('#b5to14').classed('active', false);
              d3.select('#b15to24').classed('active', false);
              d3.select('#b25to44').classed('active', false);
              d3.select('#b45to64').classed('active', false);
              d3.select('#under1').classed('active', false);
              dataset = all.slice(60, 70);
              mode = 'b64over';
              filterTable();
              drawPieChart();
          }
      });



      function filterTable() {
        d3.selectAll('.category')
            .data(dataset).transition().duration(1000)
            .text(function(d) {if(d['index']%10 == 1) {return d['Category']} else {return d['Rank']}})
            .attr("rowspan", function(d) {if(d['index']%10 == 1) return 10});
        

        d3.selectAll('.rank')
            .data(dataset).transition().duration(1000)
            .text(function(d) {if(d['index']%10 == 1) {return d['Rank']} else {return ''}})
            .style('background-color', function(d) {if(d['index']%10 == 1) {return 'white'} else {return d['Color']}});

        d3.selectAll('.color')
            .data(dataset).transition().duration(1000)
            .text(function(d) {if(d['index']%10 == 1) {return ''} else {return d['Cause_1980']}})
            .style('background-color', function(d) {if(d['index']%10 == 1) {return d['Color']} else {return 'white'}});

        d3.selectAll('.cause1980')
            .data(dataset).transition().duration(1000)
            .text(function(d) {if(d['index']%10 == 1) {return d['Cause_1980']} else {return d['Deaths_1980']}});

        d3.selectAll('.deaths1980')
            .data(dataset).transition().duration(1000)
            .text(function(d) {if(d['index']%10 == 1) {return d['Deaths_1980']} else {return d['Cause_2016']}});

        d3.selectAll('.cause2016')
            .data(dataset).transition().duration(1000)
            .text(function(d) {if(d['index']%10 == 1) {return d['Cause_2016']} else {return d['Deaths_2016']}});

        d3.selectAll('.deaths2016')
            .data(dataset).transition().duration(1000)
            .text(function(d) {if(d['index']%10 == 1) {return d['Deaths_2016']}})
            .style('padding', function(d) {if(d['index']%10 != 1) {return 0}});
      }
    }
  }
</script>
<style>
  #piee th { 
    text-align: center; 
  }
</style>