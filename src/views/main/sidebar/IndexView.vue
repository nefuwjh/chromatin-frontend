<script setup lang="ts">
import { listSpecies } from '@/data'
import { Menu } from '@element-plus/icons-vue'

const sps = listSpecies()
const route = useRoute()

const activeR = ref(route.path)
watch(route, () => {
  const path = sps.find((r) => route.path.includes(r.name))?.name
  activeR.value = `/main/species/${path}` ?? ''
})
</script>
<template>
  <el-row>
    <el-col>
      <el-menu router :default-active="activeR">
        <el-menu-item v-for="(sp, index) of sps" :index="`/main/species/${sp.name}`" :key="index">
          <el-icon><Menu /></el-icon>
          <span>{{ sp.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
