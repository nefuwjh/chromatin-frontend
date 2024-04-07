<script setup lang="ts">
</script>
<template>
  <div id="Carousel">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item>
        <img src="@/assets/damai.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/fanqie.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/gaoliang.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/yumi.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/shuidao1.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/fanqie.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/ninanjie.jpg" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<style scoped>
img {
  height: 100%;
  width: 100%;
}
/* Carousel */
#Carousel {
  padding: 10px;
  margin: 0 auto;
  /* border: 1px solid red; */
}
.el-carousel__item {
  border-radius: 20px;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>