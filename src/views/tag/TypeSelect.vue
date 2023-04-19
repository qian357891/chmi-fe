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
          v-for="item in tags"
          :key="item.id"
          :checked="item.selecting"
          @change="onChange(item)"
          >{{ item.name }}</el-check-tag
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { axiosPost } from '@/axios/api'
import { useStore } from '@/stores'
import { ElMessage } from 'element-plus'
import { ref, watch, watchEffect } from 'vue'

interface Tags {
  id: number
  name: string
  selecting: boolean
}

const MAX_TAGS_NUMBER = 3
const tagsNumber = ref(1)

const onChange = (tag: Tags) => {
  if (tagsNumber.value == MAX_TAGS_NUMBER && tag.selecting == false) {
    typeTagsFull()
    return
  }

  tag.selecting = !tag.selecting
  if (tag.selecting === true) {
    addTag(tag)
  } else {
    removeTag(tag)
  }
}

const addTag = (tag: Tags) => {
  dynamicTags.value.push(tag.name)
  tagsNumber.value++
}

const removeTag = (tag: Tags) => {
  const index = dynamicTags.value.indexOf(tag.name)
  if (index == -1) {
    return
  }
  dynamicTags.value.splice(index, 1)
  tagsNumber.value--
}

const tags = ref([
  { id: 1, name: '类别1', selecting: true },
  { id: 2, name: '类别2', selecting: false },
  { id: 3, name: '类别3', selecting: false },
  { id: 4, name: '类别4', selecting: false },
  { id: 5, name: '类别5', selecting: false },
  { id: 6, name: '类别6', selecting: false },
  { id: 7, name: '类别7', selecting: false }
])

const dynamicTags = ref(['类别1'])

// 当标签数量发生改变时，请求接口
watchEffect((oninvalid) => {
  console.log(`当前选中了${dynamicTags.value}`)
  useStore().loading = true
  // 这里做个防抖
  const timer = setTimeout(() => {
    console.log(`请求了接口，传入了${dynamicTags.value}`)
    useStore().loading = false
    //axiosPost('', dynamicTags.value)
  }, 1000)
  oninvalid(() => {
    clearInterval(timer)
  })
})

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
  tags.value.forEach((ele) => {
    if (ele.name == tag) {
      ele.selecting = !ele.selecting
      tagsNumber.value--
    }
  })
}

const typeTagsFull = () => {
  ElMessage({
    showClose: true,
    message: '最多只能选择3个标签！',
    type: 'warning'
  })
}
</script>

<style scoped lang="scss">
.parent {
  display: flex;
  flex-direction: column;
  .child {
    height: 30px;
    margin-bottom: 10px;
  }
}
.child > * {
  margin-right: 10px;
}
</style>
