<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { listSpecies, listSpeciesPart, tableData } from '@/data'
import type { PredictionBed, AddMessage } from '@/type'
import router from '@/router'
import { createElLoading } from '@/components/loading'
import { addService } from '@/service'
const route = useRoute()
const dialogFormVisible = ref(false)
const openDialogF = async () => {
  dialogFormVisible.value = true
}

const bedFileR = ref<HTMLInputElement>()
// 种类
const speciesParts = listSpeciesPart()

const bedInfoR = ref<PredictionBed>({})
const fileContentR = ref({ content: '' })

const bedFileInfoR = ref({ lines: 0, gens: '' })

const addMessage = ref<AddMessage>({})

//
const changeF = async (event: Event) => {
  const element = event.target as HTMLInputElement
  if (!element || !element.files) {
    return
  }
  const result = await readFile(element.files[0])
  // 提取行数，基因个数
  const rows = result.split('\n')
  const gens = new Set()
  rows.forEach((r) => {
    const col = r.split('\t')
    col[0] != '' && gens.add(col[0])
  })
  bedFileInfoR.value.lines = rows.length
  bedFileInfoR.value.gens = [...gens].join(', ')
  fileContentR.value.content = result
  // console.log('fileContentR.value', fileContentR.value)
  // console.log('JSON.stringify(fileContentR.value)', JSON.stringify(fileContentR.value.content))
  const num = [...gens].length - 1
  addMessage.value.chrNum = num.toString()
  addMessage.value.bedString = JSON.stringify(fileContentR.value.content)
}

const readFile = (file: Blob) => {
  return new Promise<string>((resolve) => {
    const reader = new FileReader()
    reader.readAsText(file)
    reader.onloadend = (e: ProgressEvent<FileReader>) => {
      resolve(e.target?.result as string)
    }
  })
}
// 激活隐藏的输入框
const activeF = () => {
  nextTick(() => {
    bedFileR.value?.click()
  })
}

// 预测信息返回成功弹出信息框，秒
const returnTimes = 1000 * 15

const submitF = () => {
  const spid = (route.params as any).spid as string
  addMessage.value.plantId = listSpecies()
    .find((item) => item.name === spid)
    ?.id.toString()
  addMessage.value.description = bedInfoR.value.desc
  addMessage.value.tissue = bedInfoR.value.part

  const loading = createElLoading()
  setTimeout(async () => {
    loading.close()
    await addService(addMessage.value)
    // console.log(tableData)
    ElNotification({
      title: 'Success',
      message: 'Browser extensible data been posted.',
      type: 'success',
      duration: 3000
    })
  }, 5000)

  setTimeout(() => {
    tableData[0].status = 1
    const msg = ElNotification({
      title: 'Success',
      message: 'Accessibility information has been returned.',
      type: 'success',
      duration: 0,
      onClick: () => {
        router.push(`/main/species/${spid}/details/1598746215698841328}`)
        msg.close()
      }
    })
  }, returnTimes)
  dialogFormVisible.value = false
  bedInfoR.value = {}
  bedFileInfoR.value = { lines: 0, gens: '' }
}
</script>
<template>
  <el-button type="primary" @click="openDialogF" :icon="Plus" />
  <el-dialog v-model="dialogFormVisible" title="Add Prediction Form" width="40%" class="add-form">
    <el-form class="form">
      <el-form-item>
        <el-select v-model="bedInfoR.part" placeholder="Select" size="large">
          <el-option
            v-for="item in speciesParts"
            :key="item.sname"
            :label="item.name"
            :value="item.sname" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="bedInfoR.part">
        <el-input
          v-model="bedInfoR.desc"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          placeholder="Please input" />
      </el-form-item>
      <el-form-item v-if="bedInfoR.part">
        <el-button @click="activeF" type="primary" style="width: 500px">Select Your File</el-button>
        <br />
        <div v-if="bedFileInfoR.lines > 0">
          your file：{{ bedFileInfoR.lines }} lines / chr：{{ bedFileInfoR.gens }}
        </div>
        <input type="file" ref="bedFileR" hidden @change="changeF" />
      </el-form-item>
      <el-form-item v-if="bedFileInfoR.lines > 0">
        <el-button type="success" style="width: 500px" @click="submitF">Submit</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<style>
.add-form {
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 25px 45px black;
  width: 500px;
}
</style>
