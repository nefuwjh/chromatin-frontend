<script setup lang="ts">
import { xiaomai1 } from '@/data'
import type { Xiaomai } from '@/type'
import Look01View from '@/views/main/see/Look01View.vue'
import Look02View from '@/views/main/see/Look02View.vue'
import Look03View from '@/views/main/see/Look03View.vue'
import Look04View from '@/views/main/see/Look04View.vue'
import Look05View from '@/views/main/see/Look05View.vue'
import Look06View from '@/views/main/see/Look06View.vue'

let currentPage = ref(1)
let pageSize = 10
const handleCurrentChange = (val: number): void => {
  currentPage.value = val
}
const currentPageData = ref<Xiaomai[]>([]) // 当前页显示的数据
const updateCurrentPageData = () => {
  const startIndex = (currentPage.value - 1) * pageSize
  const endIndex = currentPage.value * pageSize
  currentPageData.value = xiaomai1.slice(startIndex, endIndex)
}
// 监听 currentPage 的变化，更新当前页数据
watch(currentPage, () => {
  updateCurrentPageData()
})
// 初始化时调用一次，确保数据显示在表格中
updateCurrentPageData()
</script>
<template>
  <el-table
    :data="currentPageData"
    :default-sort="
      [
        { prop: 'start', order: 'descending' },
        { prop: 'length', order: 'descending' }
      ] as any
    ">
    <el-table-column type="index" label="#" width="50" />
    <el-table-column label="chr" prop="Chr" width="100" />
    <el-table-column label="start" prop="Start" width="150" />
    <el-table-column label="end" prop="End" width="150" />
    <el-table-column label="length" prop="Length" width="100" />
    <el-table-column label="probability" prop="Prob" />
  </el-table>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="xiaomai1.length"></el-pagination>
  <el-row class="row-00">
    <el-col :span="8.5" class="row-00">
      <Look01View></Look01View>
    </el-col>
    <el-col :span="8.5" class="row-00">
      <Look02View></Look02View>
    </el-col>
  </el-row>
  <el-row class="row-01">
    <el-col :span="8.5" class="row-01">
      <Look03View></Look03View>
    </el-col>
    <el-col :span="8.5" class="row-01">
      <Look04View></Look04View>
    </el-col>
  </el-row>
  <el-row class="row-02">
    <el-col :span="8.5" class="row-02">
      <Look05View></Look05View>
    </el-col>
    <el-col :span="8.5" class="row-02">
      <Look06View></Look06View>
    </el-col>
  </el-row>
</template>
