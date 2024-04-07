<script setup lang="ts">
const route = useRoute()
</script>
<template>
  <el-row class="my-row">
    <el-col>放详细结果，各种图表， {{ route.params.did }}
    
    </el-col>
  </el-row>
</template>
