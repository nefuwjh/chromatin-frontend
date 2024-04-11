<script setup lang="ts">
import { xiaomai1 } from '@/data'
import Look01View from '@/views/main/see/Look01View.vue'
import Look02View from '@/views/main/see/Look02View.vue'
import Look03View from '@/views/main/see/Look03View.vue'
const route = useRoute()
let currentPage = ref(1)
let pageSize = 5
const handleCurrentChange = (val: number): void => {
  currentPage.value = val
}
const currentPageData = ref([] as typeof xiaomai1)
const updateCurrentPageData = () => {
  const startIndex = (currentPage.value - 1) * pageSize
  const endIndex = currentPage.value * pageSize
  currentPageData.value = xiaomai1.slice(startIndex, endIndex)
}
</script>
<template>
  <el-table
    :data="xiaomai1"
    :default-sort="
      [
        { prop: 'start', order: 'descending' },
        { prop: 'length', order: 'descending' }
      ] as any
    ">
    <el-table-column type="index" label="#" width="50" />
    <el-table-column label="chr" prop="Chr" />
    <el-table-column label="start" prop="Start" />
    <el-table-column label="end" prop="End" />
    <el-table-column label="length" prop="Length" />
    <el-table-column label="probability" prop="Prob" />
  </el-table>
  <el-pagination
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-size="pageSize"
    :total="xiaomai1.length"></el-pagination>
  <el-row class="row-00">
    <el-col :span="8.5" class="row-00">
      <Look01View></Look01View>
    </el-col>
    <el-col :span="8.5" class="row-00">
      <Look02View></Look02View>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="8.5" class="row-00">
      <Look03View></Look03View>
    </el-col>
  </el-row>
</template>
