<script setup lang="ts">
import { ref } from 'vue'

const tabPosition = ref('top')

import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<template>
  <div id="tabs">
    <el-tabs v-model="activeName" stretch="true" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane
        label="Hordeum vulgare
            "
        name="first">
        <div>
          <img src="@/assets/damai.jpg" alt="" />
          <p>
            (Hordeum vulgare L.) &nbsp is an annual herb of the gramineous family barley. Culm
            stout, smooth hairless, erect; Leaf sheath loosely pedicellate, much glabrous or base
            pilose; Leaf tongue membranous, leaf flat, spike, spikelet dense, each segment bearing
            three developed spikelet, spikelet are sessile; Glume linear-lanceolate, outer
            pubescent; The caryopsis adheres to the lemma when ripe, and does not protrude. It is
            mainly divided into two varieties of highland barley and Tibetan highland barley.
          </p>
        </div>
        <router-link to="/barley"></router-link>
      </el-tab-pane>
      <el-tab-pane label="Triticum aestivum">
        <div>
          <img src="@/assets/xiaomai.jpg" alt="" />
          <p>
            (Triticum aestivum L.) &nbsp is an annual or annual herb of the grass family, wheat
            family. [53] The culms are erect, tufted, up to 100 cm tall, loosely sheathed,
            membranous, and long lanceolate. Spikelet erect, spikelet containing many small flowers,
            glume oval, lemma long round lanceolate, lemma several lengths to lemma. Fruit period
            May to July.
          </p>
        </div>
        <router-link to="/barley"></router-link>
      </el-tab-pane>
      <el-tab-pane label="Sorghum bicolor Moench">
        <div>
          <img src="@/assets/gaoliang.jpg" alt="" />
          <p>
            (Sorghum bicolor (L.) Moench) &nbsp is a tall annual herb. Culm highly uneven, [10]
            stout, erect, base segment with supporting roots; Leaves broad and long, leaf sheath
            glabrous or slightly white powder; Lingual dural, apex rounded, margin ciliated; Leaf
            blade linear to linear-lanceolate, base round or slightly auricular, surface dark green;
            The panicle is loose; Both glumes are leathery, caryopsis are both plain convex,
            yellow-green at first, dark brown at maturity; Style separated, stigma brushlike. Fruit
            period 6-9 months.
          </p>
        </div>
        <router-link to="/barley"></router-link>
      </el-tab-pane>
      <el-tab-pane label="Zea mays">
        <div>
          <img src="@/assets/yumi.jpg" alt="" />
          <p>
            (Zea mays) &nbsp is an annual herbaceous crop. Genetically modified corn: Sweet and
            crisp. Maize is a root crop, and the underground node is the main part of the root
            system, which is deeper into the soil. The stem is composed of nodes and internodes and
            is cylindrical with hard organization. Maize leaf consists of leaves and leaf sheath.
            Inflorescence monoecious; The seeds are often yellow, white, and purple.
          </p>
        </div>
        <router-link to="/barley"></router-link>
      </el-tab-pane>
      <el-tab-pane label="Oryza sativa">
        <div>
          <img src="@/assets/shuidao1.jpg" alt="" />
          <p>
            (Oryza sativa L.) &nbsp is an annual aquatic herb of the grass family (there are
            perennial rice varieties). The stem is erect and 0.5-1.5 m tall, depending on the
            species. Leaf sheath glabrous, loose; Lingual lanceolate; Leaf blade linear-lanceolate,
            ca. 1 cm wide, glabrous, coarse. Panicles large and sparsely spread, edges rough;
            Spikelet contains 1 mature flower.
          </p>
        </div>
        <router-link to="/barley"></router-link>
      </el-tab-pane>
      <el-tab-pane label="Solanum lycopersicum">
        <div>
          <img src="@/assets/fanqie.jpg" alt="" />
          <p>
            (Solanum lycopersicum L.) &nbsp is an annual herb of the Solanaceae family, growing up
            to 2 meters tall. Genetically modified tomatoes are bright red in color and have hard,
            hard-to-crack fruits. Tomato stems are prone to lodging.
          </p>
        </div>
        <router-link to="/barley"></router-link>
      </el-tab-pane>
      <el-tab-pane label="Arabidopsis thaliana">
        <div>
          <img src="@/assets/ninanjie.jpg" alt="" />
          <p>
            (Arabidopsis thaliana (L.) Heynh) is a delicate annual herb of the genus Arabidopsis in
            the cruciferous family. Quilt hair and branched hair; Stem unbranched or partially
            branched from middle to upper part, lower part sometimes lilac white, stem often
            longitudinally grooved, upper part glabrous, lower part unilicate, stem leaves sessile,
            lanceolate, striate, oblong, or elliptic.
          </p>
        </div>
        <router-link to="/barley"></router-link>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<style scoped>
/* tab */
p {
  text-align: justify; /* 文本两端对齐 */
}
#tabs {
  padding: 50px 100px;
  text-align: center;
  top: 50px;
  left: 50px;
  /* border: 1px solid red; */
}
.demo-tabs {
  background-color: #c8dffc;
  border-radius: 17px;
  left: 0px;
  top: 0px;
  height: 36px;
  /* border: 1px solid red; */
  position: relative;
}
.demo-tabs img {
  margin-right: 30px;
  height: 100px;
  width: 100px;
  border-radius: 100px;
  box-shadow: 0px 0px 20px #162d81db;
}
.demo-tabs div {
  display: flex;
  margin: 10px;
}
/* 去除灰色横条 */
::v-deep .el-tabs__nav-wrap::after {
  position: static !important;
}
/* 设置滑块颜色 */
::v-deep .el-tabs__active-bar {
  background-color: #538fff !important;
}
/* 设置滑块停止位置 */
::v-deep .el-tabs__active-bar.is-top {
  height: 37px;
  border-radius: 17px;
  top: 0px !important;
}
/* 设置当前选中样式 */
::v-deep .el-tabs__item.is-active {
  color: #ffffff !important;
  z-index: 2;
  /* border: 1px solid red; */
}
/* 设置未被选中样式 */
::v-deep .el-tabs__item {
  padding: 0 20px !important;
  color: hsl(0, 0%, 4%) !important;
}
</style>
