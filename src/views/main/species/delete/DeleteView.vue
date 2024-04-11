<script setup lang="ts">
import { tableData } from '@/data'

const centerDialogVisible = ref(true)
const props = defineProps<{ index: number }>()

const deleteF = () => {
  tableData.splice(props.index, 1)
  centerDialogVisible.value = false
}
</script>
<template>
  <el-dialog v-model="centerDialogVisible" title="Warning" width="500" center>
    <span>
      Are you sure you want to
      <span style="color: red; font-weight: bold">delete</span>
      this data?
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="deleteF()">Confirm</el-button>
      </div>
    </template>
  </el-dialog>
</template>
