<!-- 聊天展示功能1 -->
<template>
  <div class="">
    机器人：<span v-for="(char, index) in arr" :key="index">{{ char }}</span>
  </div>
</template>

<script setup lang="ts">
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
