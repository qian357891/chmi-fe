<template>
  <div>
    <div class="search-container">
      <input
        v-model="query"
        @keyup.enter="search"
        id="search-bar"
        type="text"
        placeholder="输入您要搜索的中药材或者您的症状"
      />
      <a @click.once="search"
        ><img
          class="search-icon"
          src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
      /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useDebouncedRef } from '../../fn/customFn'
import router from '@/router'

const query = useDebouncedRef('', 3000)

const $boo = computed(() => {
  return query.value != ''
})

const search = () => {
  console.log(`您搜索了 ${query.value}`)
  router.push({
    name: 'chat',
    query: { content: query.value }
  })
}

watchEffect((oninvalidate) => {
  console.log(`用户现在输入框中的内容为：${query.value}`)

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
