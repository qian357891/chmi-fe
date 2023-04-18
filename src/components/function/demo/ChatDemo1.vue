<!-- 聊天展示功能1 -->
<template>
  <div class="" style="width: 200px">
    <div>
      <input type="text" v-model="inputText" :disabled="whetherSend" />
    </div>
    <span v-for="(char, index) in arr" :key="index">{{ char }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputText = ref('')
const pushingText = ref(
  `海外留学生同学如果因为时差无法参加本次笔试，可以等待下一次笔试。美团校招笔试安排在每周六，10点和19点交替进行（北京时间）`
)
const arr = ref<string[]>([])

const currentChatIndex = ref(0)
const whetherSend = ref(true)

const timer = setInterval(() => {
  if (currentChatIndex.value === pushingText.value.length) {
    whetherSend.value = false
    clearInterval(timer)
  }
  arr.value.push(pushingText.value.charAt(currentChatIndex.value))
  currentChatIndex.value++
}, 100)
</script>

<style scoped lang="scss"></style>
