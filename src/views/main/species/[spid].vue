<script setup lang="ts">
import type { PredictioInfo } from '@/type'
import { Search, Tools, UploadFilled, SuccessFilled, DeleteFilled } from '@element-plus/icons-vue'
import AddBed from './AddBed.vue'
import { listPredictionResults } from '@/data'
import { showDistributeDialog } from './distribute'
import { createDelConfirmDialog } from './delete'

const route = useRoute()
const spidR = ref('')
const resultsR = ref<PredictioInfo[]>([])
watch(
  route,
  () => {
    spidR.value = (route.params as any).spid
    resultsR.value = listPredictionResults().filter((item) => item.spid === spidR.value)
  },
  { immediate: true }
)

const iconSize = 18
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
            <el-icon
              :size="iconSize"
              color="#E6A23C"
              v-if="(scope.row as PredictioInfo).status == 0">
              <UploadFilled />
            </el-icon>
            <el-icon :size="iconSize" color="green" v-else><SuccessFilled /></el-icon>
          </template>
        </el-table-column>
        <el-table-column label="Operations">
          <template #default="scope">
            <span style="display: inline-block; width: 25px; margin-right: 15px">
              <template v-if="(scope.row as PredictioInfo).status! > 0">
                <RouterLink
                  :to="`/main/species/${spidR}/details/${(scope.row as PredictioInfo).id}`">
                  <el-icon :size="iconSize"><Tools /></el-icon>
                </RouterLink>
              </template>
            </span>
            <span style="display: inline-block">
              <el-icon
                :size="iconSize"
                color="red"
                @click="createDelConfirmDialog(scope.$index)"
                style="cursor: pointer">
                <DeleteFilled />
              </el-icon>
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
