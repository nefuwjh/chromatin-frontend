<script setup lang="ts">
import type { PredictioInfo } from '@/type'
import { Search } from '@element-plus/icons-vue'
import AddBed from './AddBed.vue'
import { listPredictionResults } from '@/data'
import { showDistributeDialog } from './distribute'

const results = listPredictionResults()
</script>
<template>
  <el-row class="my-row">
    <el-col :span="2"><AddBed /></el-col>
    <el-col :span="8">
      <el-input style="width: 240px" placeholder="Type something" :prefix-icon="Search" />
    </el-col>
    <el-col>
      <el-table :data="results">
        <el-table-column type="index" label="#" width="50" />
        <el-table-column label="序号" prop="sequence" />
        <el-table-column label="个数">
          <template #default="scope">
            <el-tag type="primary" @click="showDistributeDialog()" style="cursor: pointer">
              {{ (scope.row as PredictioInfo).count }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="描述" prop="desc" />
        <el-table-column label="状态">
          <template #default="scope">
            <span v-if="(scope.row as PredictioInfo).status == 0" style="color: red">
              处理中...
            </span>
            <RouterLink :to="`/main/detail/${(scope.row as PredictioInfo).id}`" v-else>
              <span>详细</span>
            </RouterLink>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col style="margin-top: 5px">
      <el-pagination background layout="prev, pager, next" :page-size="10" :total="100" />
    </el-col>
  </el-row>
</template>
@/type
