<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
import { listSpeciesPart, listSpecies, listPredictionResults,tableData } from '@/data'
import type { PredictionBed,PredictioInfo } from '@/type'
const dialogFormVisible = ref(false)
const openDialogF = async () => {
  dialogFormVisible.value = true
}

const bedFileR = ref<HTMLInputElement>()
// 种类
const speciesParts = listSpeciesPart()
// 部位
const species = listSpecies()
const bedInfoR = ref<PredictionBed>({ name: '', part: '' })
const fileContentR = ref({ content: '' })

const bedFileInfoR = ref({ lines: 0, gens: '' })
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
  //console.log(fileContentR.value)
  //console.log(JSON.stringify(fileContentR.value))
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

const prediction = ref<PredictioInfo>({spid:'',id:'',sequence:'',count:0,desc:'',status:0})

const submitF = () => {
  prediction.value.spid = 'yumi'
  prediction.value.status = 0
  prediction.value.id = '1598746215698841328'
  // prediction.value.sequence = prediction.value.spid + '_' + prediction.value.part + '_' + 
  tableData.unshift(JSON.parse(JSON.stringify(prediction.value)))
  console.log(tableData)
}
console.log(tableData)
</script>
<template>
  <!-- <div> -->
    <el-button type="primary" @click="openDialogF" :icon="Plus" />
    <el-dialog v-model="dialogFormVisible" title="ADD" width="40%" class="add-form">
      <!-- <p style="margin-bottom: 10px">说明：</p> -->
      <el-form class="form">
        <el-form-item>
          <el-select v-model="bedInfoR.name" placeholder="Select" size="large">
            <el-option
              v-for="item in species"
              :key="item.sname"
              :label="item.name"
              :value="item.sname" />
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-select v-model="bedInfoR.part" placeholder="Select" size="large">
            <el-option
              v-for="item in speciesParts"
              :key="item.sname"
              :label="item.name"
              :value="item.sname" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="bedInfoR.desc"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Please input" />
        </el-form-item>
        <el-form-item style="border: 1px red solid;">
          <el-button @click="activeF" type="primary" style="width: 500px">Select Your File</el-button>
          <br/>
          <div>your file：{{ bedFileInfoR.lines }} lines / chr：{{ bedFileInfoR.gens }}</div>
          <input type="file" ref="bedFileR" hidden @change="changeF" />
        </el-form-item>
        <el-form-item>
          <el-button type="success" style="width: 500px;" @click="submitF">Submit</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  <!-- </div> -->
</template>
<style>

.add-form {
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0 25px 45px black;
  width: 500px;
}

</style>