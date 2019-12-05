<template>
  <div class="sankey"> 
    <div class="container">
      <!--div id="my_dataviz"></div-->
      <!--iframe src="http://pdms.usc.edu/~seherkha/a7/a7.html" width="100%" /-->
    </div>
  </div>
</template>
<script>
import * as d3v5 from 'd3v5'
  export default {
    name: 'Sankey',
    props: {
    dataset: {
      type: Array,
      }
    }, 
    mounted() {
      console.log('this');
    }
  }
</script>
<style>

.link {
  fill: none;
  stroke: #000;
  stroke-opacity: .2;
}
.link:hover {
  stroke-opacity: .5;
}
</style>
<script>

</script>
