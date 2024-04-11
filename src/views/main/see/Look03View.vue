<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { xiaomai1 } from '@/data'
const echartsInstance = ref<echarts.ECharts | null>(null)
const boxRef1 = ref<HTMLDivElement | null>(null)
onMounted(() => {
  // 初始化 echarts 实例
  const container1 = boxRef1.value
  console.log('test==', boxRef1.value)

  echartsInstance.value = echarts.init(container1)
  // 在这里可以根据需要配置 echarts 实例
  const xAxisData = xiaomai1.map((item) => item.Start + '-' + item.End)
  const yAxisData = xiaomai1.map((item) => item.Prob)

  const option1 = {
    title: {
      left: 'center',
      text: 'probability'
    },
    toolbox: {
      feature: {
        restore: {},
        dataView: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['0-0.2', '0.2-0.4', '0.4-0.6', '0.6-0.8', '0.8-1']
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Fake Data',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'lttb',
        itemStyle: {
          color: 'rgb(255, 70, 131)'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 158, 68)'
            },
            {
              offset: 1,
              color: 'rgb(255, 70, 131)'
            }
          ])
        },
        data: yAxisData
      }
    ]
  }
  echartsInstance.value.setOption(option1)
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
  display: inline-block;
  background-color: white;
  border-radius: 3%;
  border: 1px solid #ccc; /* 灰色边框 */
  transition: box-shadow 0.3s; /* 添加过渡效果 */
}
.echart-box:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* 阴影效果 */
}
</style>
