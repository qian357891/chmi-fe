<!-- 聊天展示功能1 -->
<template>
  <div class="chat">
    <div style="">
      <img src="../icons/boot.svg" width="40" />
    </div>
    <div>
      <span v-for="(char, index) in arr" :key="index">{{ char }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Platform } from '@element-plus/icons-vue'
import { ref } from 'vue'

const props = defineProps(['text'])
const pushingText = props.text
const arr = ref<string[]>([])

const currentChatIndex = ref(0)
const whetherSend = ref(true)

const timer = setInterval(() => {
  if (currentChatIndex.value === pushingText.length) {
    whetherSend.value = false
    // 输出结束，索引改变为-1
    currentChatIndex.value = -1
    clearInterval(timer)
  }
  arr.value.push(pushingText.charAt(currentChatIndex.value))
  currentChatIndex.value++
}, 100)
</script>

<style scoped lang="scss"></style>
