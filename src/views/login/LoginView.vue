<script setup lang="ts">
import type { User } from '@/type'
import { User as UserIco, Lock, UserFilled } from '@element-plus/icons-vue'
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
  <el-button type="primary" @click="dialogFormVisible = true" :icon="UserFilled" circle />

  <el-dialog
    v-model="dialogFormVisible"
    title="Welcome To PlantOCR"
    width="30%"
    style="padding: 50px; border-radius: 10px; box-shadow: 0 25px 45px black">
    <el-form class="form">
      <el-form-item>
        <el-input
          v-model="userR.account"
          placeholder="账号"
          :prefix-icon="UserIco"
          style="margin-bottom: 10px" />
        <el-input type="password" v-model="userR.password" placeholder="密码" :prefix-icon="Lock" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginF" class="login-btn">Login</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<style scoped>

.form {
  margin: 20px 0;
}
.login-btn {
  margin-top: 20px;
  width: 100%;
}
</style>