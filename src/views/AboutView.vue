<template>
  <div>
    <div class="scroll-down">
      <button class="scroll-down__button" @click="scrollToNextPage">
        <span>↓</span>
      </button>
    </div>
    <!--  -->
    <div>
      <div class="full-screen">
        <div>
          <div class="common-layout">
            <el-container>
              <el-header>
                <!-- 输入框 -->
                <header style="padding-top: 20px">
                  <div class="mt-4">
                    <el-input
                      v-model="stores.searchText"
                      @keydown.enter="search"
                      placeholder="请输入您的症状"
                      class="input-with-select"
                    >
                    </el-input>
                  </div>
                </header>
              </el-header>
              <el-main style="height: 200px">
                <TypeSelect />
              </el-main>
              <el-footer>
                <footer>
                  <div
                    v-for="item in stores.showPreMedicinalInfo.data"
                    :key="item.id"
                    style="display: inline"
                  >
                    <Items
                      :item="item"
                      :name="item.name"
                      :effect="item.effect"
                      :img="item!.img[0]"
                      style="margin: 20px"
                    />
                  </div>
                </footer>
              </el-footer>
            </el-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TypeSelect from './tag/TypeSelect.vue'
import Items from './Items.vue'
import { useStore } from '../stores/index'
import router from '@/router'
import { ElMessage } from 'element-plus'
import { axiosGet } from '@/axios/api'
import type { ManyPreMedicinalInfo } from '@/entry/PreMedicinalInfo'
import { axiosConfig } from '@/axios/axios.config'

const stores = useStore()

const data: ManyPreMedicinalInfo = (await axiosGet(axiosConfig.selectAll)).data
stores.showPreMedicinalInfo = data

const search = () => {
  if (stores.searchText == '') {
    ElMessage({
      showClose: true,
      message: '不能输入空字符串！',
      type: 'warning'
    })
    return
  }
  console.log(`您搜索了 ${stores.searchText}`)
  router.push({
    name: 'chat',
    query: { content: stores.searchText }
  })
  stores.searchText = ''
}

const nextPageRef = ref<HTMLElement | null>(null)

const scrollToNextPage = () => {
  if (nextPageRef.value) {
    nextPageRef.value.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  nextPageRef.value = document.querySelector('.full-screen')
})
</script>

<style lang="scss">
.scroll-down {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #f5f5f5;
    }

    i {
      font-size: 20px;
      color: #555;
    }
  }
}

.full-screen {
  height: 100vh;
  width: 100%;
}
</style>
