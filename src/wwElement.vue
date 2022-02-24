<template>
  <div>
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
import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import highchartsMore from "highcharts/highcharts-more";
import stockInit from "highcharts/modules/stock";
import exportingInit from "highcharts/modules/exporting";
import HC_exportData from "highcharts/modules/export-data";

stockInit(Highcharts);
highchartsMore(Highcharts);
exportingInit(Highcharts);
HC_exportData(Highcharts);

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
          text: this.content.subtitle,
        },
        rangeSelector: {
          buttonTheme: {
            // styles for the buttons
            fill: "none",
            stroke: "none",
            "stroke-width": 0,
            r: 8,
            style: {
              color: "#039",
            },
            states: {
              hover: {},
              select: {
                fill: "#039",
                style: {
                  color: "white",
                },
              },
              // disabled: { ... }
            },
          },
          labelStyle: {
            color: "silver",
            fontWeight: "bold",
          },
          buttons: [
            {
              count: 12,
              type: "hour",
              text: "12h",
            },
            {
              count: 1,
              type: "day",
              text: "1d",
            },
            {
              count: 3,
              type: "day",
              text: "3d",
            },
            {
              count: 5,
              type: "day",
              text: "5d",
            },
            {
              type: "all",
              text: "All",
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
        series: this.content.series,
        exporting: {
          buttons: {
            contextButton: {
              menuItems: [
                "viewFullscreen",
                "printChart",
                "separator",
                "downloadPNG",
                "downloadJPEG",
                "downloadPDF",
                "downloadSVG",
                "separator",
                "downloadCSV",
                "downloadXLS",
              ],
            },
          },
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.stock-chart {
  width: 100%;
  height: 100%;
}
</style>