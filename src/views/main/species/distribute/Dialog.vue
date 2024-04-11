<script setup lang="ts">
import { render } from 'vue'
import LookView from './LookView.vue'
const visibleR = ref(true)

const closeF = () => {
  render(null, document.body)
}
</script>
<template>
  <el-dialog v-model="visibleR" title="分布" width="40%" @close="closeF">
    <p>饼状图</p>
    <LookView></LookView>
  </el-dialog>
</template>
