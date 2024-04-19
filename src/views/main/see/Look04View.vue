<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { xiaomai1 } from '@/data'
const echartsInstance = ref<echarts.ECharts | null>(null)
const boxRef1 = ref<HTMLDivElement | null>(null)
const echartData = xiaomai1.map((item) => item.Prob)

onMounted(() => {
  const container1 = boxRef1.value
  echartsInstance.value = echarts.init(container1)

  // 计算有可及性和无可及性的数据总和
  const withAccessibilitySum = xiaomai1
    .filter((item) => item.Prob >= 0.5)
    .reduce((acc, item) => acc + item.Length, 0)
  const withoutAccessibilitySum = xiaomai1
    .filter((item) => item.Prob < 0.5)
    .reduce((acc, item) => acc + item.Length, 0)
  const scatterOption = {
    title: {
      left: 'center',
      text: 'probability'
    },
    grid: {
      width: '85%',
      height: '70%',
      top: '20%',
      containLabel: true
    },
    toolbox: {
      feature: {
        restore: {},
        dataView: {},
        saveAsImage: {}
      }
    },
    tooltip: {
      trigger: 'item'
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 10
      }
    ],
    xAxis: {
      offset: 30,
      type: 'category',
      data: xiaomai1.map((item, index) => index + 1),
      scale: true,
      boundaryGap: false,
      barCategoryGap: '3%',
      barGap: 0,
      axisLabel: {
        interval: 0 // 设置为 0 表示全部显示，也可以设置为具体的数字表示间隔显示
      }
    },
    yAxis: {
      type: 'value',
      offset: 30,
      min: 0,
      max: 1,
      scale: true
    },
    series: [
      {
        type: 'scatter',
        id: 'female',
        data: echartData.map((item, index) => [index + 1, item])
      },
      {
        type: 'scatter',
        id: 'male',
        data: echartData.map((item, index) => [index + 1, item])
      }
    ]
  }

  const barOption = {
    title: {
      text: 'Distribution chart',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: ['With Accessibility', 'Without Accessibility']
    },
    yAxis: {
      type: 'value'
    },
    grid: {
      width: '95%',
      height: '70%',
      top: '20%',
      left: '0%',
      containLabel: true
    },
    toolbox: {
      feature: {
        restore: {},
        dataView: {},
        saveAsImage: {}
      }
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'bar',
        id: 'total',
        data: [withAccessibilitySum, withoutAccessibilitySum]
      }
    ]
  }

  let currentOption = scatterOption

  setInterval(function () {
    currentOption = currentOption === scatterOption ? barOption : scatterOption
    echartsInstance.value.setOption(currentOption, true)
  }, 10000)

  echartsInstance.value.setOption(scatterOption)
})
</script>

<template>
  <div>
    <div class="echart-box" ref="boxRef1"></div>
  </div>
</template>

<style scoped>
.echart-box {
  width: 400px;
  height: 300px;
  margin-top: 35px;
  margin-left: 20px;
  display: inline-block;
  background-color: white;
  border-radius: 3%;
  border: 1px solid #ccc;
  transition: box-shadow 0.3s;
}
.echart-box:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
</style>
