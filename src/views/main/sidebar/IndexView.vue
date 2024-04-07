<script setup lang="ts">
import { Plus, Setting, Coffee, Delete } from '@element-plus/icons-vue'
</script>
<template>
  <el-row class="my-row">
    <el-col>
      <el-menu router>
        <el-menu-item index="/main/species/yumi">
          <el-icon><Plus /></el-icon>
          <span>玉米</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><Coffee /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><Delete /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
