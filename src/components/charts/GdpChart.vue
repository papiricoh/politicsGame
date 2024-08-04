<script setup>

</script>


<script lang="js">
import { defineComponent } from 'vue';
import { Chart } from 'highcharts-vue';
import { Options } from 'highcharts';


export default defineComponent({
    name: 'GdpChart',
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'spline'
                },
                title: {
                    text: 'GDP Chart'
                },
                xAxis: {
                    type: 'datetime',
                    dateTimeLabelFormats: {
                        // don't display the year
                        month: '%e. %b',
                        year: '%b'
                    },
                },
                yAxis: {
                    title: {
                        text: 'GPD in US Dollars'
                    }
                },
                series: [{
                    name: 'Country GDP',
                    data: []
                }],
                tooltip: {
                    backgroundColor: '#000000'
                }
            }
        };
    },
    computed: {
        
    },
    props: {
        newData: Number,
        
    },
    watch: {
        newData: {
            handler(newVal, oldVal) {
                this.chartOptions.series[0].data = newVal;
            },
            immediate: true
        }
    },
    methods: {
        
    },
});
</script>

<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<style>


</style>


