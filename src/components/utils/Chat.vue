<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <SideBar />
        </el-aside>
        <el-container>
          <el-main>
            <main style="height: 600px">
              <PromptCard />
              <div v-for="(text, index) in textList" :key="index">
                <div class="user chat">
                  <div>
                    <el-icon :size="40"><Avatar /></el-icon>
                  </div>
                  <span>{{ text }}</span>
                </div>
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
import TextPopping from '../utils/TextPopping.vue'
import { axiosGet } from '@/axios/api'
import { useRoute } from 'vue-router'
import { axiosConfig } from '@/axios/axios.config'
import SideBar from '@/views/side-bar/SideBar.vue'
import { Avatar } from '@element-plus/icons-vue'
import PromptCard from '@/views/chat/PromptCard.vue'

const route = useRoute()

const { content } = route.query as { content: string }

const firstText: BotText = (await axiosGet(`${axiosConfig.chat}?ask=${content}`)).data

const text = ref('')
const textList = ref<string[]>([])
const botText = ref(firstText.data)

if (content != '') {
  textList.value.push(content)
}

interface BotText {
  msg: string
  code: number
  data: string
}

const submit = async () => {
  const _botText: BotText = (await axiosGet(`${axiosConfig.chat}?ask=${text.value}`)).data
  botText.value = _botText.data

  textList.value.push(text.value)

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
</style>
