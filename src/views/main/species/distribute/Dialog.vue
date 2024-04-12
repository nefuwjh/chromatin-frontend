<script setup lang="ts">
import { render } from 'vue'
import LookView from './LookView.vue'
const visibleR = ref(true)

const closeF = () => {
  render(null, document.body)
}
</script>
<template>
  <el-dialog
    v-model="visibleR"
    title="Distribution Map"
    width="40%"
    @close="closeF"
    center
    style="border-radius: 10px">
    <LookView></LookView>
  </el-dialog>
</template>
