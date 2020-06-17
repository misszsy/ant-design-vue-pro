<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";

/**
 * created 在实例创建完成后被立即调用
 * mounted 实例被挂载后调用
 */
export default {
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
  watch: {
    /**
     * 监听option，当值改变的时候，根据新数据绘图表
     * 当option不会变化，只是里面的值变化时,那么下面的方式不起作用
     */
    option(val) {
      this.chart.setOption(val);
    }

    //方式二：深度监听,但该方案遇到数据量大的会很耗性能
    // option: {
    //   handler(val) {
    //     this.chart.setOption(val);
    //   },
    //   deep: true,
    // },
  },
  mounted() {
    this.renderChart();
    addListener(this.$refs.chartDom, this.resize);
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    //组件销毁的时候,chart的实例也要销毁掉，防止内存泄漏
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    resize() {
      this.chart.resize();
    },
    renderChart() {
      //初始化echarts实例
      this.chart = echarts.init(this.$refs.chartDom);
      //绘制图表
      this.chart.setOption(this.option);
    }
  }
};
</script>
