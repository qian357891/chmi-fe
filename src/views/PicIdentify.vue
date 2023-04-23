<template>
  <div>
    <el-container>
      <el-aside width="200px" style="background-color: black">
        <div>
          <RouterLink to="/" class="btn">首页</RouterLink>
        </div>
      </el-aside>
      <el-container>
        <el-main style="height: 700px">
          <Search />

          <div style="display: flex; flex-direction: column; align-items: center">
            <h1>您可能想找</h1>
            <el-divider />
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
              <div class="infinite-list-wrapper" style="overflow: auto">
                <div
                  v-for="recommend in resp.recommend"
                  :key="recommend.id"
                  v-infinite-scroll="load"
                  :infinite-scroll-disabled="disabled"
                >
                  <items
                    :img="recommend.img"
                    :name="recommend.name"
                    :effect="recommend.effect"
                    :item="recommend"
                    style="margin-bottom: 20px"
                  />
                </div>
                <p v-if="loading">正在加载...</p>
                <p v-if="noMore">没有更多了，回主页看看吧！</p>
              </div>
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
