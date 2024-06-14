<script setup>

</script>


<script lang="js">
import { defineComponent } from 'vue';
import Highcharts from 'highcharts';
import { Chart } from 'highcharts-vue';
import { Options } from 'highcharts';
import ItemSeries from 'highcharts/modules/item-series';

ItemSeries(Highcharts);

export default defineComponent({
    name: 'GoodPriceChart',
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'item'
                },
                title: {
                    text: 'Distribution of seats'
                },

                legend: {
                    labelFormat: '{name} <span style="opacity: 0.4">{y}</span>'
                },

                series: [{
                    name: 'Representatives',
                    keys: ['name', 'y', 'color', 'label'],
                    data: [
                        ['Christian Social Union in Bavaria', 45, '#3366CC', 'CSU'],
                    ],
                    dataLabels: {
                        enabled: true,
                        format: '{point.label}',
                        style: {
                            textOutline: '3px contrast'
                        }
                    },

                    // Circular options
                    center: ['50%', '88%'],
                    size: '170%',
                    startAngle: -100,
                    endAngle: 100
                }],
            }
        };
    },
    computed: {
        
    },
    props: {
        newData: Array,
        
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
  <div class="parliament_chart">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<style scoped>
.parliament_chart {
    width: 44rem;
}
</style>
