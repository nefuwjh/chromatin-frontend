<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const echartsInstance = ref<echarts.ECharts | null>(null)
const boxRef1 = ref<HTMLDivElement | null>(null)

onMounted(() => {
  const container1 = boxRef1.value
  if (container1) {
    echartsInstance.value = echarts.init(container1)

    const option1 = {
      title: {
        text: 'DNase-seq',
        left: 'center'
      },
      grid: {
        width: '100%',
        height: '50%',
        left: '0%',
        top: '15%',
        containLabel: true
      },
      xAxis: {
        data: Array.from({ length: 140 }, (_, i) => i + 1),
        axisLabel: {
          show: false
        }
      },
      yAxis: {
        axisLabel: {
          show: false
        }
      },
      series: [
        {
          data: [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            1,
            null,
            2,
            null,
            3,
            null,
            4,
            null,
            5,
            null,
            5,
            null,
            6,
            null,
            7,
            null,
            8,
            null,
            9,
            null,
            9,
            null,
            7,
            null,
            7,
            null,
            5,
            null,
            5,
            null,
            4,
            null,
            5,
            null,
            6,
            null,
            8,
            null,
            9,
            null,
            7,
            null,
            7,
            null,
            6,
            null,
            6,
            null,
            6,
            null,
            5,
            null,
            5,
            null,
            3,
            null,
            3,
            null,
            2,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
          ],
          type: 'bar',
          showBackground: false, // 关闭柱子背景
          color: 'green',
          barWidth: 10,
          barGap: '10%' // 调整柱状图之间的间距
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
  width: 1150px;
  height: 180px;
  margin-top: 45px;
  margin-left: 30px; /* 居中 */
  margin-right: auto; /* 居中 */
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
