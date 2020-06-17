<template>
  <div>
    <Chart :option="chartOption" style="height:400px;" />
  </div>
</template>

<script>
import random from "lodash/random";
import Chart from "../../components/Chart";

export default {
  data() {
    return {
      chartOption: {
        title: {
          text: "Echarts 入门实例"
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    };
  },
  mounted() {
    //测试Chart组件深入监听option值改变时，图表是否有更新
    this.interval = setInterval(() => {
      this.chartOption.series[0].data = this.chartOption.series[0].data.map(
        () => random(100)
      );
      this.chartOption = { ...this.chartOption };
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  components: {
    Chart
  }
};
</script>
