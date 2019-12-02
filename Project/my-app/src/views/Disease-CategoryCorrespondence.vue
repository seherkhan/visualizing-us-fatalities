<template>
<div class="diseasecate">
    <div id="div">
    </div>
    <h1 class="display-4">Age-adjusted death rates for selected causes of death, by sex, race, and Hispanic origin</h1>       
    <p class="lead">Trends over the Years - United States, selected years 1950–2016.</p>
                    
    <!--BarChart v-bind:dataset='dataset1'/-->
    <Sankey v-bind:dataset ="dataset1" v-if="dataLoaded"/>
    <StackedBar v-bind:dataset ="dataset2" v-if="dataLoaded"/>
</div>

</template>
<script>
import * as d3 from 'd3'
import Sankey from '@/components/Sankey.vue'
import StackedBar from '@/components/StackedBar.vue'

export default {
    name: 'diseasecate',
    data() {
    return {
        dataLoaded: false,
        dataset1: [],
        dataset2: []
    };
  },
  components: {
    Sankey, 
    StackedBar
  },
  mounted() {
    var promises = [];
    promises.push(d3.json("sankey-data.json"));
    promises.push(d3.json("stacked-bar-chart.json"));
    var view = this;
    Promise.all(promises).then(function(values) {
      view.dataset1 = values[0];
      view.dataset2 = values[1];
      view.dataLoaded = true;
    });
  }
}
</script>