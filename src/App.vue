<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div style="width: 500px; height: 200px">
      <ColumnarLine :chartOption="chartOption1" style="height: 100%; width: 100%" />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import * as echarts from 'echarts';

import ColumnarLine from '@/components/Chart/columnarLine';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    ColumnarLine,
  },
  data() {
    return {
      chartOption1: {
        color: ['#00E9EA', '#0F87FF'],
        id: 'test_1',
        legend: {
          data: ['数量', '占比'],
        },
        xAxis: {
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: [
          {
            name: '数量/件',
          },
          {
            name: '占比%',
          },
        ],
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
            name: '数量',
          },
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'bar',
            barWidth: 12,
            name: '占比',
            yAxisIndex: 1,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#4F9EFD' },
                { offset: 1, color: '#0F87FF' },
              ]),
            },
          },
        ],
        dataZoom: {
          show: false,
          type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
          startValue: 0, // 从头开始。
          endValue: 5,
          filterMode: 'empty',
          delay: 3000, // 延迟
        },
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
