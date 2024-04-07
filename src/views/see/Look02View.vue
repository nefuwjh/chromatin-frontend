<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import { look02 } from '@/data/index'
import { ArrowLeft, ArrowRight } from '@element-plus/icons-vue'
import type internal from 'stream'
const echartsInstance = ref<echarts.ECharts | null>(null)
const boxRef2 = ref<HTMLDivElement | null>(null)

const dataSets = look02()

let dataIndex = ref(0)

//监听dataIndex的变化
watch(dataIndex, (newValue) => {
  updateChart(newValue)
})

//更新图表数据
const updateChart = (index: number) => {
  if (echartsInstance.value) {
    const option = {
      series: [
        {
          data: dataSets[index]
        }
      ]
    }
    echartsInstance.value.setOption(option)
  }
}
onMounted(() => {
  // 初始化 echarts 实例
  const container2 = boxRef2.value

  if (container2) {
    echartsInstance.value = echarts.init(container2)
    // 在这里可以根据需要配置 echarts 实例
    const option2 = {
      grid: {
        width: '30%', // 设置图表宽度为容器宽度的70%
        height: '30%', // 设置图表高度为容器高度的70%
        left: '5%', // 调整图表在容器中的位置
        top: '5%',
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
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          padAngle: 5,
          itemStyle: {
            borderRadius: 10
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: dataSets[dataIndex.value]
        }
      ]
    }
    echartsInstance.value.setOption(option2)
  }
})

//定时器
setInterval(() => {
  dataIndex.value = (dataIndex.value + 1) % dataSets.length
}, 3000)
</script>

<template>
  <div class="echart-box" ref="boxRef2"></div>
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
