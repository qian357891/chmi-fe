<template>
  <el-row class="tac">
    <el-col :span="24">
      <h3 class="mb-2" style="padding-left: 25px"><RouterLink to="/">AI养生宝</RouterLink></h3>
      <el-menu class="menu">
        <header>
          <RouterLink to="/">
            <el-menu-item>
              <el-icon><icon-menu /></el-icon>
              首页
            </el-menu-item>
          </RouterLink>

          <RouterLink to="/chat?content=">
            <el-menu-item>
              <el-icon><setting /></el-icon>
              在线智能AI问诊
            </el-menu-item>
          </RouterLink>
        </header>
        <footer>
          <DiaLog />
        </footer>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  QuestionFilled,
  Setting
} from '@element-plus/icons-vue'
import DiaLog from './DiaLog.vue'
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
}
</style>
