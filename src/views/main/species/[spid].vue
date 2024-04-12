<script setup lang="ts">
import type { PredictioInfo } from '@/type'
import { Search, Tools, UploadFilled, SuccessFilled, DeleteFilled } from '@element-plus/icons-vue'
import AddBed from './AddBed.vue'
import { listPredictionResults } from '@/data'
import { showDistributeDialog } from './distribute'
import { createDelConfirmDialog } from './delete'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()

const resultsR = ref<PredictioInfo[]>([])

watch(
  route,
  () => {
    resultsR.value = listPredictionResults().filter((item) => item.spid === route.params.spid)
  },
  { immediate: true }
)

console.log(resultsR.value)
</script>
<template>
  <el-row class="my-row">
    <el-col :span="2"><AddBed /></el-col>
    <el-col :span="8">
      <el-input style="width: 240px" placeholder="Type something" :prefix-icon="Search" />
    </el-col>
    <el-col>
      <el-table :data="resultsR">
        <el-table-column type="index" label="#" width="50" />
        <el-table-column label="Data Name" prop="sequence" width="200" />
        <el-table-column label="Add Time" prop="time" />
        <el-table-column label="Chr Count" width="100">
          <template #default="scope">
            <el-tag
              type="primary"
              @click="showDistributeDialog()"
              style="cursor: pointer; margin: 20px">
              {{ (scope.row as PredictioInfo).count }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Description" prop="desc" show-overflow-tooltip />
        <el-table-column label="State" width="100">
          <template #default="scope">
            <span v-if="(scope.row as PredictioInfo).status == 0" style="color: red; margin: 10px">
              <el-icon><UploadFilled /></el-icon>
            </span>
            <span v-else style="color: green; margin: 10px">
              <el-icon><SuccessFilled /></el-icon>
            </span>
          </template>
        </el-table-column>
        <el-table-column label="Operations">
          <template #default="scope">
            <span v-if="(scope.row as PredictioInfo).status == 0"></span>
            <span v-else>
              <RouterLink :to="`/main/detail/${(scope.row as PredictioInfo).id}`">
                <span style="margin: 10px">
                  <el-icon><Tools /></el-icon>
                </span>
              </RouterLink>
              <el-button
                type="primary"
                @click="createDelConfirmDialog(scope.$index)"
                :icon="DeleteFilled"
                circle
                style="
                  color: red;
                  background-color: white;
                  border: 0;
                  padding-top: 1px;
                "></el-button>
            </span>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <el-col style="margin-top: 5px">
      <el-pagination background layout="prev, pager, next" :page-size="10" :total="100" />
    </el-col>
  </el-row>
</template>
