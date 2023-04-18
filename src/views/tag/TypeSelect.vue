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
          v-for="item in types"
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
import { ElMessage } from 'element-plus'
import { ref, watch } from 'vue'
interface Types {
  id: number
  name: string
  selecting: boolean
}

const MAX_TAGS_NUMBER = 3
const tagsNumber = ref(1)

const onChange = (type: Types) => {
  if (tagsNumber.value == MAX_TAGS_NUMBER && type.selecting == false) {
    typeTagsFull()
    return
  }

  type.selecting = !type.selecting
  if (type.selecting === true) {
    addType(type)
  } else {
    removeType(type)
  }
}

watch(tagsNumber, () => {
  console.log(tagsNumber.value)
})

const addType = (type: Types) => {
  dynamicTags.value.push(type.name)
  tagsNumber.value++
}

const removeType = (type: Types) => {
  const index = dynamicTags.value.indexOf(type.name)
  if (index == -1) {
    return
  }
  dynamicTags.value.splice(index, 1)
  tagsNumber.value--
}

const types = ref([
  { id: 1, name: '类别1', selecting: true },
  { id: 2, name: '类别2', selecting: false },
  { id: 3, name: '类别3', selecting: false },
  { id: 4, name: '类别4', selecting: false },
  { id: 5, name: '类别5', selecting: false },
  { id: 6, name: '类别6', selecting: false },
  { id: 7, name: '类别7', selecting: false }
])

const dynamicTags = ref(['类别1'])

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
  types.value.forEach((ele) => {
    if (ele.name == tag) {
      ele.selecting = !ele.selecting
      tagsNumber.value--
    }
  })
}

const typeTagsFull = () => {
  ElMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
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
