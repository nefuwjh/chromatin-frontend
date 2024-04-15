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
      title: {
        text: 'MNase-seq',
        left: 'center'
      },
      grid: {
        width: '68%', // 设置图表宽度为容器宽度的70%
        height: '65%', // 设置图表高度为容器高度的70%
        left: '8%', // 调整图表在容器中的位置
        top: '15%',
        containLabel: true // 是否包含坐标轴标签
      },
      toolbox: {
        feature: {
          dataView: {
            show: true,
            readOnly: false,
            // 设置 dataView 的位置和大小
            width: '100px'
          },
          restore: {},
          saveAsImage: {}
        }
      },
      tooltip: {
        trigger: 'item'
      },
      xAxis: {
        type: 'category',
        data: ['大麦', '小麦', '高粱', '玉米', '水稻', '番茄', '拟南芥']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}%' //设置为百分数
        },
        max: 100
      },
      series: [
        {
          data: [82, 80, 70, 60, 70, 10, 30],
          type: 'bar',
          showBackground: true,
          color: '#2486b9',
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
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
  width: 515px;
  height: 200px;
  margin-top: 35px;
  margin-left: 40px;
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
