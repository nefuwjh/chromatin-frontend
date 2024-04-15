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
  // 按照概率值区间对 Length 进行累加
  const lengthSumByProbGroup = {
    '0-0.2': 0,
    '0.2-0.4': 0,
    '0.4-0.6': 0,
    '0.6-0.8': 0,
    '0.8-1': 0
  }

  xiaomai1.forEach((item) => {
    const prob = item.Prob
    const length = item.Length

    if (prob >= 0 && prob < 0.2) {
      lengthSumByProbGroup['0-0.2'] += length
    } else if (prob >= 0.2 && prob < 0.4) {
      lengthSumByProbGroup['0.2-0.4'] += length
    } else if (prob >= 0.4 && prob < 0.6) {
      lengthSumByProbGroup['0.4-0.6'] += length
    } else if (prob >= 0.6 && prob < 0.8) {
      lengthSumByProbGroup['0.6-0.8'] += length
    } else if (prob >= 0.8 && prob <= 1) {
      lengthSumByProbGroup['0.8-1'] += length
    }
  })

  const option1 = {
    title: {
      left: 'center',
      text: 'probability'
    },
    grid: {
      width: '85%', // 设置图表宽度为容器宽度的70%
      height: '70%', // 设置图表高度为容器高度的70%
      top: '20%',
      containLabel: true // 是否包含坐标轴标签
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
    xAxis: {
      offset: 30,
      type: 'category',
      boundaryGap: false,
      data: ['0-0.2', '0.2-0.4', '0.4-0.6', '0.6-0.8', '0.8-1'],
      // barCategoryGap: '5%', // 调整类目之间的间距为类目宽度的5%
      // barGap: 0, // 设置柱子之间的间距为0
 
    },
    yAxis: {
      offset: 30, // 将 y 轴向左移动，使其保持在左侧
      boundaryGap: [0, '100%'],
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        barWidth: '40%',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgb(255, 158, 68)' },
            { offset: 0.5, color: 'rgb(255, 70, 131)' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgb(255, 158, 68)' },
              { offset: 0.7, color: 'rgb(255, 158, 68)' },
              { offset: 1, color: 'rgb(255, 158, 68)' }
            ])
          }
        },
        data: [
          lengthSumByProbGroup['0-0.2'],
          lengthSumByProbGroup['0.2-0.4'],
          lengthSumByProbGroup['0.4-0.6'],
          lengthSumByProbGroup['0.6-0.8'],
          lengthSumByProbGroup['0.8-1']
        ]
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
