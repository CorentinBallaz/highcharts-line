<template>
  <div class="ww-highchart">
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
          style: {
            fontFamily: this.content.fontFamily,
          },
          backgroundColor: this.content.backgroundColor,
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
              color: this.content.buttonColor,
            },
            states: {
              hover: {},
              select: {
                fill: this.content.buttonColor,
                style: {
                  color: "white",
                },
              },
              // disabled: { ... }
            },
          },
          inputStyle: {
            color: this.content.rangeSelectorColor,
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
            dataGrouping: {
              enabled: false,
            },
          },
        },
        xAxis: {
          type: "datetime",
        },
        yAxis: {
          title: {
            text: this.content.yAxisTitle,
          },
          opposite: false,
        },
        tooltip: {
          valueSuffix: this.content.suffixValue,
          valueDecimals: 2,
        },
        noData: {
          style: {
            fontSize: "20px",
          },
        },
        series: this.content.series,
        exporting: {
          filename: this.content.exportingFilename,
          buttons: {
            contextButton: {
              symbol: "menuball",
              theme: {
                fill: this.content.backgroundColor,
              },
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
          chartOptions: {
            chart: {
              backgroundColor: this.content.backgroundColor,
            },
          },
        },
        scrollbar: {
          barBackgroundColor: this.content.buttonColor,
          barBorderRadius: 7,
          barBorderWidth: 0,
          buttonBackgroundColor: this.content.buttonColor,
          buttonBorderWidth: 0,
          buttonArrowColor: "white",
          buttonBorderRadius: 7,
          rifleColor: "white",
          trackBackgroundColor: "white",
          trackBorderWidth: 0,
          trackBorderColor: "silver",
          trackBorderRadius: 7,
        },
      };
    },
  },

  watch: {
    "content.isFull"(newVal, oldVal) {
      if (newVal !== oldVal) {
        console.log("changement de taille du container");
        console.log(newVal + "" + oldVal);
        this.$nextTick(function () {
          this.$refs.highcharts.chart.reflow(); // => 'mis à jour'
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.ww-highchart {
  position: relative;
  width: 100%;
  height: 100%;

  .stock-chart {
    position: absolute;
    width: 100%;
    height: 100%;
  }
}
</style>