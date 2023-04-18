<template>
  <div class="typing">
    <span
      v-for="(char, index) in typedText"
      :key="index"
      :class="{ 'typing-char': true, 'typing-char-active': index < currentCharIndex }"
    >
      {{ char }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const text = '这里是在线智能问诊，一个智能聊天机器人！'
const typedText = ref('')
const currentCharIndex = ref(0)

const startTyping = () => {
  const timer = setInterval(() => {
    typedText.value = text.slice(0, currentCharIndex.value + 1)
    currentCharIndex.value++
    if (currentCharIndex.value === text.length) {
      clearInterval(timer)
    }
  }, 100)
}

startTyping()
</script>

<style scoped lang="scss">
.typing {
  display: flex;
  flex-wrap: wrap;
}

.typing-char {
  opacity: 0;
  animation: typing-char-fade-in 0.3s ease-in-out forwards;
}

.typing-char-active {
  opacity: 1;
}

@keyframes typing-char-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
