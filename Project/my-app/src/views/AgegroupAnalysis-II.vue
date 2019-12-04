<template>
<div class="age2">
    <div class="container" style="margin:25px">
      <h1 class="display-4" style="font-size:25px;font-weight:bold;"> Death rates by age groups</h1>
      <p>
          United States, 2006-2016. Includes deaths of persons who were not residents of the 50 states and the District of Columbia (D.C.).<br>
          Age-adjusted death rate per 100,000 population.
      </p>
    </div>
    <div>
      <HeatMap v-bind:dataset ="dataset1" v-if="dataLoaded"/>
      <br/><br/><br/><br/><br/>
      
      <Stacked v-bind:dataset ="dataset2" v-if="dataLoaded"/>
      <div class="container">
        <p><u>Important Information:</u></p>
        <ul>
            <li><b>Age-adjusted rates are calculated using the year 2000 standard population. Prior to 2001, age-adjusted rates were calculated using standard million proportions
                    based on rounded population numbers.</b> Starting with 2001 data, unrounded population numbers are used to calculate age-adjusted rates.</li>
            <li><b>Death Rates for less than 1 years of age have not been reported since the standard measure of reporting statistics for Infant Mortality is the Infant Mortality Rate</b> (the number of deaths per live births in an year)</li>
        </ul>

        <p><u>References:</u></p>
        <ul>
            <li>Source - <a href='https://www.cdc.gov/nchs/data/hus/2017/fig21.pdf'>https://www.cdc.gov/nchs/data/hus/2017/fig21.pdf</a></li>
            <li>National Center for Health Statistics. 2018. Available from: <a href='https://www.cdc.gov/nchs/products/nvsr.htm'>https://www.cdc.gov/nchs/products/nvsr.htm</a></li>
        </ul>
    </div>
    </div>
</div>

</template>
<script>
import * as d3v5 from 'd3v5'
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
    promises.push(d3v5.json("heatmap.json"));
    promises.push(d3v5.json("stacked.json"));
    var view = this;
    Promise.all(promises).then(function(values) {
      view.dataset1 = values[0];
      view.dataset2 = values[1];
      view.dataLoaded = true;
    });
  }
}
</script>