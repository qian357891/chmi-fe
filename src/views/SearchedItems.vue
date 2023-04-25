<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <SideBar />
      </el-aside>
      <el-container>
        <el-main style="height: 700px">
          <Search />

          <div style="display: flex; flex-direction: column; align-items: center">
            <h1>您可能想找</h1>
            <Items
              :img="info.data.img[0]"
              :name="info.data.name"
              :effect="info.data.effect"
              :item="info.data"
            />
          </div>
          <footer style="display: flex; align-items: center; flex-direction: column">
            <h1>为您推荐</h1>
            <el-divider />
            <Recommend :data="info" />
          </footer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { axiosGet } from '@/axios/api'
import { axiosConfig } from '@/axios/axios.config'
import Items from './Items.vue'
import type { SearchedInfo } from '../entry/SearchedInfo'
import Search from '@/components/utils/Search.vue'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Recommend from './recommend/Recommend.vue'
import SideBar from './side-bar/SideBar.vue'

const route = useRoute()
const { item } = route.query

const info: SearchedInfo = (await axiosGet(`${axiosConfig.selectByName}?item=${item}`)).data

const count = ref(2)
const loading = ref(false)
const noMore = computed(() => count.value >= 5)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    count.value += 1
    loading.value = false
  }, 2000)
}
</script>

<style scoped lang="scss"></style>
