<template>
<div class="age2">
    <div id="div">
    </div>
    <h1 class="display-4" style="margin-right:15px;margin-left:15px"> Death rates by age groups</h1>
    <p class="lead" style="margin-right:15px;margin-left:15px">
        United States, 2006-2016. Includes deaths of persons who were not residents of the 50 states and the District of Columbia (D.C.).<br>
        Age-adjusted death rate per 100,000 population.
    </p>
    <!--BarChart v-bind:dataset='dataset1'/-->
    <HeatMap v-bind:dataset ="dataset1" v-if="dataLoaded"/>
    <Stacked v-bind:dataset ="dataset2" v-if="dataLoaded"/>
</div>

</template>
<script>
import * as d3 from 'd3'
import HeatMap from '@/components/HeatMap.vue'
import Stacked from '@/components/Stacked.vue'

export default {
    name: 'age2',
    data() {
    return {
        dataLoaded: false,
        dataset1: [],
        dataset2: []
        /*
        dataset1: [{ "key": "A", "value": 45 },
        { "key": "B", "value": 75 },
        { "key": "C", "value": 130 }]*/
    };
  },
  components: {
    HeatMap, 
    Stacked
  },
  mounted() {
    var promises = [];
    promises.push(d3.json("heatmap.json"));
    promises.push(d3.json("stacked.json"));
    var view = this;
    Promise.all(promises).then(function(values) {
      view.dataset1 = values[0];
      view.dataset2 = values[1];
      view.dataLoaded = true;
    });
  }
}
</script>