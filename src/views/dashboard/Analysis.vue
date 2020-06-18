<template>
  <div>
    <Chart :option="chartOption" style="height:400px;" />
  </div>
</template>

<script>
import axios from "axios";
import Chart from "../../components/Chart";

export default {
  data() {
    return {
      chartOption: {}
    };
  },
  mounted() {
    this.getChartData();
    //测试Chart组件深入监听option值改变时，图表是否有更新
    this.interval = setInterval(() => {
      this.getChartData();
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  components: {
    Chart
  },
  methods: {
    getChartData() {
      axios.get("/api/dashboard/chart", { params: { id: 1 } }).then(data => {
        this.chartOption = {
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
              data: data.data
            }
          ]
        };
      });
    }
  }
};
</script>
