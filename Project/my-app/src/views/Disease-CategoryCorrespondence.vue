<template>
<div class="diseasecate">
    <div class="container" style="margin:25px">
    <h1 class="display-4" style="font-size:25px;font-weight:bold;">
      Age-adjusted death rates for selected causes of death, by sex, race, and Hispanic origin
      </h1>       
    <p class="lead">Trends over the Years - United States, selected years 1950–2016.</p>
    </div>
    
    <StackedBar v-bind:dataset ="dataset1" v-if="dataLoaded"/>
    
    <div class="container" style="margin:25px">
    <p>The data represents death rates in the United States for selected years 1950–2016. 
      The chart helps us to understand the correlation between the Diseases and different Categories (Race, Origin and Gender). 
      Hovering over a particular Disease, shows the breakdown of people who died from that disease in the selected year. 
      Similarly, hovering over the Category, displays breakdown of various causes of deaths for the people in that category. </p>
    <div class="alert alert-info" role="alert">
        Click on the Button to select one-to-one relationship between Diseases and Category in particular year
    </div>
  </div>
    <iframe frameBorder="0" width="100%" height="900px" src="http://pdms.usc.edu/~shraddhk/project/sankey.html"></iframe>
        <div class="container"  style="border:1px solid black">
        <p><u>Important Information:</u></p>
        <ul>
            <li><b>Age-adjusted rates are calculated using the year 2000 standard population. Prior to 2001, age-adjusted rates were calculated using standard million proportions
                    based on rounded population numbers.</b> Starting with 2001 data, unrounded population numbers are used to calculate age-adjusted rates.</li>
            <li><b>Starting with 1999 data, the rules for selecting CLRD and Pneumonia as the underlying cause of death changed</b>, resulting in an increase in the number of deaths
                    for CLRD and a decrease in the number of deaths for Pneumonia. Therefore, trend data for these two causes of death should be interpreted with caution.</li>
            <li><b>Starting with 2011 data, the rules for selecting Renal failure as the underlying cause of death were changed</b>, affecting the number of deaths in the Nephritis,
                    nephrotic syndrome and nephrosis and Diabetes categories. The result is a decrease in the number of deaths for Nephritis, nephrotic syndrome and nephrosis and an increase in the number of deaths for Diabetes mellitus. Therefore,
                    trend data for these two causes of death should be interpreted with caution.</li>
            <li><b>Death rates for Hispanic, American Indian or Alaska Native, and Asian or Pacific Islander persons should be interpreted with caution</b> because of inconsistencies in reporting Hispanic origin
                    or race on the death certificate compared with population figures. The net effect of misclassification is an underestimation of deaths and death
                    rates for races other than white and black. </li>
        </ul>

        <p><u>References:</u></p>
        <ul>
            <li>Source - <a href='https://www.cdc.gov/nchs/data/hus/2017/017.pdf'>https://www.cdc.gov/nchs/data/hus/2017/017.pdf</a></li>
            <li>National Center for Health Statistics. 2018. Available from: <a href='https://www.cdc.gov/nchs/products/nvsr.htm'>https://www.cdc.gov/nchs/products/nvsr.htm</a></li>
        </ul>
    </div>
    <br/><br/><br/>
</div>

</template>
<script>
import * as d3v5 from 'd3v5'
import StackedBar from '@/components/StackedBar.vue'

export default {
    name: 'diseasecate',
    data() {
    return {
        dataLoaded: false,
        dataset1: [],
    };
  },
  components: {
    StackedBar
  },
  mounted() {
    var promises = [];
    promises.push(d3v5.json("stacked-bar-chart.json"));
    var view = this;
    Promise.all(promises).then(function(values) {
      view.dataset1 = values[0];
      view.dataLoaded = true;
    });
  }
}
</script>