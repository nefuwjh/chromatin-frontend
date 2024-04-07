<script setup lang="ts"></script>
<template>
  <suspense>
    <template #default>
      <RouterView id="router" />
    </template>
    <template #fallback>
      <LoadingVue />
    </template>
  </suspense>
</template>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  overflow-x: hidden;
  width: 100vw;
}
/* el-dialog默认计算了滚动条 */
.el-popup-parent--hidden {
  width: 100% !important;
}

#app {
  /* max-width: 1200px; */
  min-height: 100vh;
  border-radius: 4px;
  margin: 0 auto;
  padding: 10px;
  overflow: overlay;
  background: linear-gradient(to bottom right, #06c6bf, #162d81db);
  padding: 20px 100px;
}

.my-row {
  margin: 5px 5px 10px 5px;
  border-radius: 5px;
  padding: 25px 10px 10px 10px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.my-col {
  margin-bottom: 10px;
  /* border: 1px solid red; */
}

.btn {
  text-align: center;
  padding: 4px 12px;
  font-family: Arial, sans-serif;
  color: white;
  border-radius: 15px;
  box-shadow: 10px 4px 10px rgb(255, 255, 255);
}

#router {
  padding: 20px;
  /* 毛玻璃 */
  background: rgb(255, 255, 255, 0.1);
  border-radius: 10px;
  justify-content: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgb(0, 0, 0, 0.1);
  border: 1px solid rgb(255, 255, 255, 0.5);
  border-right: 1px solid rgb(255, 255, 255, 0.2);
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
  /*  */
}
</style>
