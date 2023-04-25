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
              :img="resp.data.img[0]"
              :name="resp.data.name"
              :effect="resp.data.effect"
              :item="resp.data"
            />
          </div>
          <footer style="display: flex; align-items: center; flex-direction: column">
            <h1>为您推荐</h1>
            <el-divider />
            <div>
              <Recommend :data="resp" />
            </div>
          </footer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Items from './Items.vue'
import Search from '@/components/utils/Search.vue'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import Recommend from './recommend/Recommend.vue'
import SideBar from './side-bar/SideBar.vue'

const route = useRoute()
let { resp } = route.query as any

resp = JSON.parse(resp)

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
