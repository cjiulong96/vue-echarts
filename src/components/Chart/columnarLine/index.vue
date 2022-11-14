<template>
  <div :id="echartId" :ref="echartId" style="width: 100%; height: 100%"></div>
</template>

<script>
import * as echarts from 'echarts';
import baseOption from './baseOption';
import { merge } from 'lodash';
export default {
  props: {
    chartOption: {
      type: Object,
      default: () => {
        return {
          id: 'echartId',
        };
      },
    },
  },
  data() {
    return {
      chart: null,
      timer: null,
    };
  },
  computed: {
    echartId() {
      // 唯一id
      return `${this.chartOption?.id}_${new Date().getTime()}`;
    },
    option() {
      // 合并option
      return merge({}, baseOption, this.chartOption);
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    // 绘制charts
    initChart() {
      this.$nextTick(() => {
        let el = this.$refs[this.echartId];
        if (!el) return;
        this.chart = echarts.init(el);
        this.chart.setOption(this.option, true);
        // 铺满容器
        this.fillContainer(el);
        // 滚动
        this.option?.dataZoom && (this.startMove(), el.addEventListener('mouseover', this.stopMove), el.addEventListener('mouseout', this.startMove));
      });
    },
    // canvas铺满容器
    fillContainer(el) {
      const resizeOb = new ResizeObserver(entries => {
        for (const entry of entries) {
          echarts.getInstanceByDom(entry.target)?.resize();
        }
      });
      this.echartId && resizeOb.observe(el);
    },
    // 开始滚动
    startMove() {
      if (this.timer) return;
      let {
        dataZoom: { startValue, endValue, delay },
        xAxis,
      } = this.option;
      // 最大索引
      let maxValue = xAxis.data.length - 1;
      // 存储最初的索引值 startValue endValue，以便重置
      let origin = {
        startValue,
        endValue,
      };
      this.timer = setInterval(() => {
        if (endValue === maxValue) {
          startValue = origin.startValue;
          endValue = origin.endValue;
          this.chart.setOption({
            dataZoom: {
              startValue,
              endValue,
            },
          });
        } else {
          this.chart.setOption({
            dataZoom: {
              startValue: ++startValue,
              endValue: ++endValue,
            },
          });
        }
      }, delay);
    },
    // 停止滚动
    stopMove() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
  beforeDestroy() {},
  watch: {
    chartOption: {
      handler() {
        // this.initChart();
      },
      deep: true,
    },
  },
};
</script>

<style></style>
