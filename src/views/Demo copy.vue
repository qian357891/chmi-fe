<template>
  <div>
    <div class="parent">
      <div class="child">
        <el-tag
          v-for="tag in dynamicTags"
          :key="tag"
          class="mx-1"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
      </div>
      <div class="child">
        <el-check-tag
          v-for="item in availableTypes"
          :key="item.id"
          :checked="item.selecting"
          @change="onChange(item)"
          :disabled="disableTag(item)"
        >
          {{ item.name }}
        </el-check-tag>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'

interface Types {
  id: number
  name: string
  selecting: boolean
}

const MAX_TAGS = 3

const onChange = (type: Types) => {
  type.selecting = !type.selecting
  if (type.selecting) {
    addType(type)
  } else {
    removeType(type)
  }
}

const addType = (type: Types) => {
  dynamicTags.value.push(type.name)
}

const removeType = (type: Types) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(type.name), 1)
}

const types = ref<Types[]>([
  { id: 1, name: '类别1', selecting: true },
  { id: 2, name: '类别2', selecting: false },
  { id: 3, name: '类别3', selecting: false },
  { id: 4, name: '类别4', selecting: false },
  { id: 5, name: '类别5', selecting: false },
  { id: 6, name: '类别6', selecting: false },
  { id: 7, name: '类别7', selecting: false }
])

const dynamicTags = ref<string[]>(['类别1'])

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
  types.value.forEach((ele) => {
    if (ele.name === tag) {
      ele.selecting = !ele.selecting
    }
  })
}

// 过滤出可用的类别，即未被选中且标签数量不超过上限的类别
const availableTypes = computed(() =>
  types.value.filter((item) => !item.selecting && dynamicTags.value.length < MAX_TAGS)
)

// 判断某个类别是否应该禁用标签
const disableTag = (type: Types) => {
  return dynamicTags.value.length >= MAX_TAGS && !type.selecting
}

// 监听动态标签数量，当数量达到上限时，禁用剩余类别
watchEffect(() => {
  if (dynamicTags.value.length >= MAX_TAGS) {
    types.value.forEach((type) => {
      if (!type.selecting) {
        type.selecting = true
      }
    })
  }
})
</script>
<style scoped lang="scss">
.parent {
  display: flex;
  flex-direction: column;
  .child {
    height: 30px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    .el-check-tag {
      cursor: pointer;
    }
    .el-tag {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
