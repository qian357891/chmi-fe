<script setup lang="ts">
import HomeView from './HomeView.vue'
</script>

<template>
  <div>
    <div class="video-box">
      <video
        class="video-background"
        preload="auto"
        loop
        playsinline
        autoplay
        src="https://prod-streaming-video-msn-com.akamaized.net/49a16a97-2dfb-4296-90f4-12459a46d5d5/c5fc2d44-2573-4fff-99d7-c863763063e6.mp4"
        tabindex="-1"
        muted="false"
      ></video>
    </div>
    <HomeView />
  </div>
</template>

<style scoped>
.container::after {
  content: '';
  display: block;
  clear: both;
}

.video-box {
  z-index: -10;
  /*进行视频裁剪*/
  overflow: hidden;
}

.video-box .video-background {
  position: absolute;
  left: 50%;
  top: 50%;
  /*保证视频内容始终居中*/
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  /*保证视频充满屏幕*/
  object-fit: cover;
  min-height: 800px;
}
</style>
