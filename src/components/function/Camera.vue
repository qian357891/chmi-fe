<template>
  <div class="camera-wrapper">
    <div v-show="!stores.cameraActive">
      <el-icon size="30px" class="camera-open" @click="startCamera"><camera-filled /></el-icon>
    </div>
    <div v-show="stores.cameraActive" class="camera-preview-wrapper">
      <i class="el-icon-close camera-close" @click="stopCamera">x</i>
      <video ref="video" class="camera-preview"></video>
      <div class="camera-controls">
        <el-button type="success" @click="takePicture">Take Picture</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElMessage } from 'element-plus'
import { useStore } from '@/stores'
const stores = useStore()

const video = ref<HTMLVideoElement>()
const constraints = {
  audio: false,
  video: {
    width: { ideal: 1280 },
    height: { ideal: 720 }
  }
}

let stream
const startCamera = async () => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints)
    video.value!.srcObject = stream
    video.value!.play()
    stores.cameraActive = true
  } catch (error: any) {
    ElMessage.error('打开摄像头失败: ' + error.message)
  }
}

const stopCamera = async () => {
  stream = await navigator.mediaDevices.getUserMedia(constraints)
  const tracks = stream.getTracks()
  tracks.forEach((track) => track.stop())
  video.value!.srcObject = null
  stores.cameraActive = false
}

const takePicture = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = video.value!.videoWidth
  canvas.height = video.value!.videoHeight
  ctx!.drawImage(video.value!, 0, 0, canvas.width, canvas.height)
  const dataUrl = canvas.toDataURL()
  ElMessage.success('拍摄成功！请在控制台查看')
  console.log('Picture taken: ' + dataUrl)
}
</script>

<style lang="scss" scoped>
.camera-wrapper {
  z-index: 10;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .camera-preview-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    .camera-close {
      z-index: 20;
      position: absolute;
      top: 1rem;
      right: 1rem;
      font-size: 2rem;
      color: #fff;
      cursor: pointer;
    }
  }

  .camera-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .camera-controls {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
  }
}

.camera-open {
  position: relative;
  left: 200px;
  bottom: 114px;
  cursor: pointer;
}
</style>
