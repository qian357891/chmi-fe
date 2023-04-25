<template>
  <div>
    <div class="search-container">
      <input
        v-model="stores.searchText"
        @keyup.enter="search"
        id="search-bar"
        type="text"
        placeholder="请输入您的症状或者想要查找的药材"
      />
      <a @click="search"
        ><img
          class="search-icon"
          src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
      /></a>
      <!-- <Camera /> -->
      <CameraIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import router from '@/router'
import { useStore } from '@/stores'
import Camera from './Camera.vue'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'
import CameraIcon from '../../views/upload/CameraIcon.vue'

const stores = useStore()

const search = () => {
  if (stores.searchText == '') {
    ElMessage({
      showClose: true,
      message: '不能输入空字符串！',
      type: 'warning'
    })
    return
  }
  if (stores.searchText.length <= 5) {
    router.push({ name: 'searchedItems', query: { item: stores.searchText } })
    return
  }
  console.log(`您搜索了 ${stores.searchText}`)
  router.push({
    name: 'chat',
    query: { content: stores.searchText }
  })
  stores.searchText = ''
}

watchEffect((oninvalidate) => {
  console.log(`用户现在输入框中的内容为：${stores.searchText}`)

  oninvalidate(() => {
    console.log('调用接口')
  })
})
</script>

<style scoped lang="scss">
body {
  padding-top: 75px;
}
.search-container {
  width: 490px;
  display: block;
  margin: 0 auto;
}

input#search-bar {
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #d0cfce;
  outline: none;
  &:focus {
    border: 1px solid #008abf;
    transition: 0.35s ease;
    color: #008abf;
    &::-webkit-input-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &::-moz-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &:-ms-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
  }
}

.search-icon {
  cursor: pointer;
  position: relative;
  float: right;
  width: 75px;
  height: 75px;
  top: -62px;
  right: -45px;
}
</style>
