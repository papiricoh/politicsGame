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
    name: 'ElectionsChart',
    data() {
        return {
            chartOptions: {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                title: {
                    text: 'Elections</br>Predictions',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: 60,
                    style: {
                        fontSize: '1.1em'
                    }
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: 'Predicted Votes'
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: true,
                            distance: -50,
                            style: {
                                fontWeight: 'bold',
                                color: 'white'
                            }
                        },
                        startAngle: -90,
                        endAngle: 90,
                        center: ['50%', '75%'],
                        size: '110%'
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Predicted Votes',
                    innerSize: '50%',
                    data: [
                        
                    ]
                }]
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
