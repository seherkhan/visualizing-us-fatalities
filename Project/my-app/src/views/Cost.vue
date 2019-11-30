<template>
  <div class='cost'>
    <h1>hey</h1>
    <svg class='chart'></svg>
    <svg class='chart'></svg>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  name: 'chart',
  mounted () {
    d3.json('bars.json').then(function (dataset) {
      console.log(dataset)

      var margin = { top: 20, left: 80, bottom: 50, right: 10 }
      var width = 300 - margin.left - margin.right
      var height = 300 - margin.top - margin.bottom

      var svg = d3.selectAll('.chart')
        .style('background-color', 'mistyrose')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')')

      var x = d3.scaleBand()
        .domain(dataset.map(function (d) { return d.key }))
        .range([0, width])
        .paddingInner(0.05)

      var y = d3.scaleLinear()
        .domain([0, d3.max(dataset, function (d) { return d.value })])
        .range([height, 0])

      svg.selectAll('.bar')
        .data(dataset, function (d) { return d.key })
        .enter().append('rect')
        .attr('fill', 'lightblue')
        .attr('class', 'bar')
        .attr('x', function (d) { return x(d.key) })
        .attr('y', function (d) { return y(d.value) })
        .attr('width', x.bandwidth())
        .attr('height', function (d) { return height - y(d.value) })

      var xAxis = d3.axisBottom().scale(x)
      var yAxis = d3.axisLeft().scale(y)

      svg.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + height + ')')
        .call(xAxis)
      svg.append('g')
        .attr('class', 'axis')
        .call(yAxis)

      // d3.select('bars').attr()style()
      // draw bars here
    })
    // add drawing code here
  }
}
</script>
