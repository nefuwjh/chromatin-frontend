<script setup lang="ts">
import LoginView from './login/LoginView.vue'
import CarouselView from '../components/layout/CarouselView.vue'
import TabsView from '../components/layout/TabsView.vue'
import Look01View from './see/Look01View.vue'
import Look02View from './see/Look02View.vue'
import Look03View from './see/Look03View.vue'
import Look04View from './see/Look04View.vue'
import Look05View from './see/Look05View.vue'
import Look06View from './see/Look06View.vue'
import Look07View from './see/Look07View.vue'
</script>
<template>
  <main>
    <el-row class="my-row">
      <el-col :span="16" class="my-col">
        <h1>PlantOCR</h1>
      </el-col>
      <el-col :span="2" class="my-col btn">Help</el-col>
      <el-col :span="2" class="my-col">
        <LoginView />
      </el-col>
    </el-row>
    <!-- 首页组件位置 -->
    <CarouselView />
    <TabsView />
    <IntroductView></IntroductView>
    <DataView></DataView>
    <el-row class="row-01">
      <el-col :span="8.5" class="row-01">
        <Look01View></Look01View>
      </el-col>
      <el-col :span="8.5" class="row-01">
        <Look02View></Look02View>
      </el-col>
      <el-col :span="8.5" class="row-01">
        <Look03View></Look03View>
      </el-col>
    </el-row>
    <el-row class="row-02">
      <el-col :span="10" class="row-02">
        <Look04View></Look04View>
      </el-col>
      <el-col :span="10" class="row-02">
        <Look05View></Look05View>
      </el-col>
    </el-row >
    <el-row class="row-03">
      <el-col :span="10" class="row-03">
        <Look06View></Look06View>
      </el-col>
      <el-col :span="10" class="row-03">
        <Look07View></Look07View>
      </el-col>
    </el-row>
  </main>
</template>
<style scoped></style>
