<script setup lang="ts">
import type { User } from '@/type'
import { User as UserIco, Lock, Connection } from '@element-plus/icons-vue'
import router from '@/router'
const dialogFormVisible = ref(false)
const userR = ref<User>({ account: '1001', password: '1001' })

const loginF = () => {
  if (userR.value.account == '1001' && userR.value.password == '1001') {
    router.push('/main')
  }
}
</script>
<template>
  <el-button type="primary" @click="dialogFormVisible = true" :icon="Connection" circle />
  
  <el-dialog v-model="dialogFormVisible" title="登录" width="30%">
    <el-form>
      <el-form-item>
        <el-input
          v-model="userR.account"
          placeholder="账号"
          :prefix-icon="UserIco"
          style="margin-bottom: 10px" />
        <el-input type="password" v-model="userR.password" placeholder="密码" :prefix-icon="Lock" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginF">登录</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
