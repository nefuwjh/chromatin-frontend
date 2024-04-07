<script setup lang="ts"></script>
<template>
  <div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <h2>Introduction about PlantOCR</h2>
    <div>
        <br><br>
      <el-row class="myrow">
        <el-col :span="1" class="myrow"></el-col>
        <el-col :span="10" class="myrow">
          <span class="text">
            Chromatin accessibility is one of the most important areas of gene regulation and
            epigenetics. In recent years, the development of high-throughput sequencing technology
            has promoted the advancement of chromatin open region detection methods, but is limited
            by the high cost and complexity of wet experiments, making clinical samples difficult to
            perform epigenetic analysis. Bioinformatic methods have received much attention from
            researchers because they can explain the accessibility of unannotated chromatin with the
            help of sequenced samples. The research on chromatin accessibility is relatively lagging
            in the field of plants due to their cellular characteristics, but in recent years,
            researchers have actively explored the construction methods of chromatin accessibility
            data sets in plants and tried to combine them with bioinformatics methods. Our system
            provides a chromatin accessibility prediction model for seven common species
          </span>
        </el-col>
        <el-col :span="12" class="myrow">
          <img src="@/assets/ATAC文库.png"  class="mypic"/>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style>
h2 {
  display: flex;
  justify-content: center;
}
.mypic {
  max-width: 100%; /* 图片宽度不超过容器宽度 */
  transform: scale(0.9); 
}
.text {
  display: block;
  font-family: Arial, sans-serif; /* 使用默认字体 */
  text-align: justify; /* 文本两端对齐 */
  text-justify: inter-word; /* 单词间距进行调整 */
  line-height: 1.5; /* 行高 */
}
</style>
