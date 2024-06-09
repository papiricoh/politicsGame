<script setup>

</script>


<script lang="js">
import { defineComponent } from 'vue';
import { Chart } from 'highcharts-vue';
import { Options } from 'highcharts';


export default defineComponent({
    name: 'GoodPriceChart',
    data() {
        return {
            chartOptions: {
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Sample Line Chart'
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
                },
                yAxis: {
                    title: {
                        text: 'Value'
                    }
                },
                series: [{
                    name: 'Sample Data',
                    data: []
                }]
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
                this.chartOptions.series[0].data.push(newVal);
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


