<script setup lang="ts">
import { Menu } from '@element-plus/icons-vue'
</script>
<template>
  <el-row class="my-row">
    <el-col>
      <el-menu router>
        <el-menu-item index="/main/species/Hordeum_vulgare">
          <el-icon><Menu /></el-icon>
          <span>Hordeum_vulgare</span>
        </el-menu-item>
        <el-menu-item index="/main/species/Triticum_aestivum">
          <el-icon><Menu /></el-icon>
          <span>Triticum_aestivum</span>
        </el-menu-item>
        <el-menu-item index="/main/species/Sorghum_bicolor">
          <el-icon><Menu /></el-icon>
          <span>Sorghum_bicolor</span>
        </el-menu-item>
        <el-menu-item index="/main/species/Zea_mays">
          <el-icon><Menu /></el-icon>
          <span>Zea_mays</span>
        </el-menu-item>
        <el-menu-item index="/main/species/Oryza_sativa">
          <el-icon><Menu /></el-icon>
          <span>Arabidopsis_thaliana</span>
        </el-menu-item>
        <el-menu-item index="/main/species/Solanum_lycopersicum">
          <el-icon><Menu /></el-icon>
          <span>Oryza_sativa</span>
        </el-menu-item>
        <el-menu-item index="/main/species/Arabidopsis_thaliana">
          <el-icon><Menu /></el-icon>
          <span>Solanum_lycopersicum</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<style scoped>
.my-row {
  /* border: 1px red solid; */
}
</style>
