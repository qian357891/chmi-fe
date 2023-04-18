<template>
  <div class="chatgpt-container">
    <div class="chatgpt-header">在线智能问诊</div>
    <div class="chatgpt-messages">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="[
          'chatgpt-message',
          {
            'chatgpt-message-user': message.sender === 'user',
            'chatgpt-message-chatbot': message.sender === 'chatbot'
          }
        ]"
      >
        <span
          v-if="message.sender === 'chatbot'"
          v-for="(char, index) in message.text"
          :key="index"
        >
          {{ char }}
        </span>
        <span v-else>
          <TransitionGroup
            leave-active-class="animate__animated animate__bounceOut"
            enter-active-class="animate__animated animate__bounceIn"
          >
            <span v-for="(char, index) in incrementalText" :key="index">
              {{ char }}
            </span>
          </TransitionGroup>
        </span>
      </div>
    </div>
    <div class="chatgpt-input">
      <input type="text" v-model="inputValue" @keyup.enter="sendMessage(inputValue)" />
      <button @click="sendMessage(inputValue)">Send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'

const incrementalText = ref('')
const currentCharIndex = ref(0)

const startTyping = (text: string) => {
  const timer = setInterval(() => {
    incrementalText.value = text.slice(0, currentCharIndex.value + 1)
    currentCharIndex.value++
    if (currentCharIndex.value === text.length) {
      clearInterval(timer)
    }
  }, 100)
}

//
const route = useRoute()

const { content } = route.query as { content: string }

interface Message {
  text: string
  sender: 'user' | 'chatbot'
}

const messages = reactive<Message[]>([
  { text: '您好这里是在线智能问诊，请问您的问题是什么？', sender: 'chatbot' }
])

const inputValue = ref<string>('')

const sendMessage = (value: string) => {
  if (value.trim() === '') {
    return
  }

  messages.push({ text: value, sender: 'user' })

  const botChat: Message = { text: `您输入了${value}，调用接口`, sender: 'chatbot' }
  // // 调接口
  messages.push(botChat)
  startTyping(botChat.text)

  inputValue.value = ''
}
sendMessage(content)
</script>

<style lang="scss" scoped>
//
.chatgpt-container {
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .chatgpt-header {
    padding: 16px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid #ccc;
  }

  .chatgpt-messages {
    flex: 1;
    padding: 16px;
    overflow-y: auto;

    .chatgpt-message {
      margin-bottom: 16px;
      padding: 8px 16px;
      border-radius: 8px;
      max-width: 80%;
      word-wrap: break-word;

      &.chatgpt-message-user {
        background-color: #3399ff;
        color: #fff;
        align-self: flex-end;
      }

      &.chatgpt-message-chatbot {
        background-color: #f0f0f0;
        color: #333;
        align-self: flex-start;
      }
    }
  }
  .chatgpt-input {
    display: flex;
    align-items: center;
    padding: 16px;

    input[type='text'] {
      flex: 1;
      height: 40px;
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
      font-size: 16px;
      outline: none;
    }

    button {
      margin-left: 8px;
      height: 40px;
      padding: 0 16px;
      border-radius: 4px;
      border: none;
      background-color: #3399ff;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>
