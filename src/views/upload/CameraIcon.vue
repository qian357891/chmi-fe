<template>
  <div class="camera-wrapper">
    <el-icon size="30px" class="camera-open" @click="dialogTableVisible = true">
      <CameraFilled />
    </el-icon>

    <el-dialog v-model="dialogTableVisible" title="上传药材图片/照相机识别">
      <Upload />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import Upload from '@/components/utils/Upload.vue'
import { CameraFilled } from '@element-plus/icons-vue'
import { ref } from 'vue'

const dialogTableVisible = ref(false)
</script>
<style scoped lang="scss">
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}

.camera-wrapper {
  z-index: 10;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.camera-open {
  position: relative;
  left: 200px;
  bottom: 114px;
  cursor: pointer;
}
</style>
