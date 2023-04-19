<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px" style="background-color: black">
          <div>
            <RouterLink to="/" class="btn">首页</RouterLink>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <main style="height: 600px">
              <div v-for="(text, index) in textList" :key="index">
                <div class="user">用户输入：{{ text }}</div>
                <div class="bot">
                  <TextPopping :text="botText" />
                </div>
              </div>
            </main>
          </el-main>
          <el-footer>
            <footer>
              <el-input
                v-model="text"
                :rows="2"
                type="textarea"
                @keyup.enter="submit"
                placeholder="请输入您的症状"
              />
            </footer>
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TextPopping from '../function/TextPopping.vue'
import { axiosPost } from '@/axios/api'
import { useRoute } from 'vue-router'

const route = useRoute()

const { content } = route.query as { content: string }

const text = ref('')
const textList = ref<string[]>([])
const botText = ref(`调用接口，传入参数：${content}`)

textList.value.push(content)

const submit = () => {
  textList.value.push(text.value)
  botText.value = `调用接口，传入：${text.value}`
  // 调接口，拿到值后传入TextPooping组件
  // const botText= axiosPost('',text)
  text.value = ''
}
</script>

<style scoped lang="scss">
.user {
  background: #ffffff;
  padding: 50px 200px;
}
.bot {
  background-color: #f7f7f8;
  padding: 50px 200px;
}
.btn {
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #2a2b32;
  }
}
</style>
