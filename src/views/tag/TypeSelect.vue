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
import { axiosGet } from '@/axios/api'
import { axiosConfig } from '@/axios/axios.config'
import { useStore } from '@/stores'
import { ElMessage } from 'element-plus'
import { dataType } from 'element-plus/es/components/table-v2/src/common'
import { ref, watchEffect, type Ref } from 'vue'

interface Tags {
  id: number
  name: string
  selecting: boolean
}

const MAX_TAGS_NUMBER = 5
const tagsNumber = ref(1)

const onChange = (tag: Tags) => {
  if (tagsNumber.value == MAX_TAGS_NUMBER + 1 && tag.selecting == false) {
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

const tags: Ref<Tags[]> = ref([])

// 拿到初始数据，遍历push进数组
const _tags = (await axiosGet(axiosConfig.getTags)).data
let i = 0
for (const Tag in _tags.data) {
  for (const tag of _tags.data[Tag]) {
    tags.value.push({
      id: ++i,
      name: tag,
      selecting: false
    })
  }
}

const store = useStore()

const dynamicTags: Ref<string[]> = ref([])

// 当标签数量发生改变时，请求接口
watchEffect((oninvalid) => {
  console.log(`当前选中了${dynamicTags.value}`)

  useStore().loading = true
  // 这里做个防抖
  const timer = setTimeout(async () => {
    if (dynamicTags.value[0] == null) {
      // 没有选标签调用all
      store.showPreMedicinalInfo = (await axiosGet(axiosConfig.selectAll)).data
    } else {
      // 选标签调用SelectByTags
      store.showPreMedicinalInfo = (
        await axiosGet(`${axiosConfig.selectByType}?checkItems=${dynamicTags.value}`)
      ).data
      console.log(store.showPreMedicinalInfo)
    }
    useStore().loading = false
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
    message: `最多只能选择${MAX_TAGS_NUMBER}个标签！`,
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

:deep(.el-check-tag) {
  margin-bottom: 10px;
}
</style>
