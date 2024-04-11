<script setup lang="ts">
import { Menu } from '@element-plus/icons-vue'
</script>
<template>
  <el-row class="my-row">
    <el-col>
      <el-menu router>
        <el-menu-item index="/main/species/damai">
          <el-icon><Menu /></el-icon>
          <span>Hordeum_vulgare</span>
        </el-menu-item>
        <el-menu-item index="/main/species/xiaomai">
          <el-icon><Menu /></el-icon>
          <span>Triticum_aestivum</span>
        </el-menu-item>
        <el-menu-item index="/main/species/gaoliang">
          <el-icon><Menu /></el-icon>
          <span>Sorghum_bicolor</span>
        </el-menu-item>
        <el-menu-item index="/main/species/yumi">
          <el-icon><Menu /></el-icon>
          <span>Zea_mays</span>
        </el-menu-item>
        <el-menu-item index="/main/species/shuidao">
          <el-icon><Menu /></el-icon>
          <span>Arabidopsis_thaliana</span>
        </el-menu-item>
        <el-menu-item index="/main/species/fanqie">
          <el-icon><Menu /></el-icon>
          <span>Oryza_sativa</span>
        </el-menu-item>
        <el-menu-item index="/main/species/ninanjie">
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