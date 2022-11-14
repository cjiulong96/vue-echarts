// baseOptions.js
export default {
  color: ['#0067E1', '#0CC1FF', '#00D1B3', '#85E814', '#FFA082'],
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
      shadowStyle: {
        color: 'rgba(239, 245, 255, 0.06)',
      },
    },
  },
  legend: {
    left: 'center',
    itemWidth: 8,
    itemHeight: 8,
    icon: 'circle',
    padding: [20, 0],
    itemGap: 24,
    textStyle: {
      fontSize: 14,
      color: '#C9DCFF',
    },
  },
  grid: {
    top: 50,
    left: 20,
    right: 20,
    bottom: 20,
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    splitLine: {
      show: false,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: 'rgba(15,135,255,0.2)',
        width: 2,
      },
    },
    axisLabel: {
      show: true,
      color: '#C8DCFF',
      fontSize: 16,
      fontWeight: 'bold',
      interval: 0,
    },
    axisTick: {
      show: false,
      lineStyle: {
        color: 'rgba(255, 255, 255, 0.2)',
        width: 2,
      },
      alignWithLabel: true,
    },
  },
  yAxis: [
    {
      splitNumber: 4,
      nameTextStyle: {
        color: '#C9DCFF',
        fontSize: 16,
      },
      type: 'value',
      alignTicks: true,
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 16,
        color: '#c8dcff',
        fontWeight: 'bold',
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.04)',
        },
      },
    },
    {
      splitNumber: 4,
      nameTextStyle: {
        color: '#C9DCFF',
        fontSize: 16,
      },
      type: 'value',
      alignTicks: true,
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 16,
        color: '#c8dcff',
        fontWeight: 'bold',
      },
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255, 0.08)',
        },
      },
    },
  ],
  series: [],
};
