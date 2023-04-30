<template>
  <div>
    <main>
      <el-icon @mouseenter="mouseenter" style="height: 100px; width: 100px" :size="40"
        ><Location
      /></el-icon>
    </main>
    <div :class="{ show_off: isShow }">
      <el-icon :size="40"><icon-menu /></el-icon>
      <el-icon :size="40"><Document /></el-icon>
      <el-icon :size="40"><setting /></el-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { ref } from 'vue'
const isShow = ref(false)
const i = ref(0)

const mouseenter = () => {
  i.value++
  if (i.value % 2 == 0) {
    isShow.value = false
    return
  }
  isShow.value = true
}
</script>

<style scoped lang="scss">
main:hover {
  cursor: pointer;
}

.show_off {
  opacity: 0;
}
</style>
