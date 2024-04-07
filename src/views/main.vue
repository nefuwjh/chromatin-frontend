<script setup lang="ts">
import HeaderView from './main/header/IndexView.vue'
import SidebarView from './main/sidebar/IndexView.vue'
</script>
<template>
  <el-container>
    <el-header class="container"><HeaderView /></el-header>
    <el-container style="margin-top: 5px">
      <el-aside class="container" width="200px">
        <SidebarView />
      </el-aside>
      <el-main class="container"><RouterView /></el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
.container {
  padding: 0px;
  margin: 5px;
}
</style>
