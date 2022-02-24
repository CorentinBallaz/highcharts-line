<template>
    <div>
        <!-- <highcharts :constructorType="'stockChart'" class="hc" :options="chartOptions" ref="chart"></highcharts> -->
        <highcharts
            class="stock-chart"
            :constructor-type="'stockChart'"
            :options="chartOptions"
            :updateArgs="[true, false]"
            ref="highcharts"
        ></highcharts>
    </div>
</template>

<script>
import { Chart } from 'highcharts-vue';
import Highcharts from 'highcharts';
import stockInit from 'highcharts/modules/stock';

stockInit(Highcharts);

export default {
    components: { highcharts: Chart },
    props: { content: { type: Object, required: true } },
    data() {
        return {
            updateArgs: [true, true, true],
        };
    },
    computed: {
        chartOptions() {
            return {
                chart: {
                    spacingTop: 20,
                    spacingBottom: 20,
                    spacingLeft: 20,
                    spacingRight: 20,
                },
                title: {
                    text: this.content.title,
                },
                subtitle: {
                    text : this.content.subtitle,
                },
                rangeSelector: {
                    buttons: [
                        {
                            count: 12,
                            type: 'hour',
                            text: '12h',
                        },
                        {
                            count: 1,
                            type: 'day',
                            text: '1d',
                        },
                        {
                            count: 3,
                            type: 'day',
                            text: '3d',
                        },
                        {
                            count: 5,
                            type: 'day',
                            text: '5d',
                        },
                        {
                            type: 'all',
                            text: 'All',
                        },
                    ],
                },
                plotOptions: {
                    series: {
                        showInNavigator: true,
                    },
                },
                yAxis: {
                    title: {
                        text: this.content.yAxisTitle,
                    },
                    min: this.content.yAxisMin,
                    opposite: false,
                },
                series: [
                    {
                        name: this.content.seriesName,
                        data: this.content.data,
                        color: this.content.seriesColor,
                        lineWidth: this.content.lineWidth,
                    },
                ],
            };
        },
    },
};
</script>