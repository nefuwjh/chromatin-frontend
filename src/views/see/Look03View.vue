<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
const echartsInstance = ref<echarts.ECharts | null>(null)
const boxRef1 = ref<HTMLDivElement | null>(null)
onMounted(() => {
  // 初始化 echarts 实例
  const container1 = boxRef1.value
  console.log('test==', boxRef1.value)
  if (container1) {
    echartsInstance.value = echarts.init(container1)
    // 在这里可以根据需要配置 echarts 实例

    const option1 = {
      grid: {
        width: '68%', // 设置图表宽度为容器宽度的70%
        height: '65%', // 设置图表高度为容器高度的70%
        left: '8%', // 调整图表在容器中的位置
        top: '15%',
        containLabel: true // 是否包含坐标轴标签
      },
      toolbox: {
        feature: {
          dataView: {},
          restore: {},
          saveAsImage: {}
        }
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['time', 'season', 'temperature', 'humidness', 'illumination']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 20, name: 'temperature' },
            { value: 5, name: 'humidness' },
            { value: 30, name: 'time' },
            { value: 15, name: 'illumination' },
            { value: 30, name: 'season' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    echartsInstance.value.setOption(option1)
  }
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
