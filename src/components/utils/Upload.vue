<template>
  <div>
    <el-upload class="upload-demo" drag :action="action" :limit="1" :on-success="success" multiple>
      <el-icon class="el-icon--upload"><upload-filled /></el-icon>
      <div class="el-upload__text">将图片拖到这里 或者 <em>点击上传图片</em></div>
      <template #tip>
        <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
      </template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { axiosConfig } from '@/axios/axios.config'
import router from '@/router'
import { useStore } from '@/stores'
import type { UploadFile, UploadFiles } from 'element-plus'

const action = axiosConfig.rootUrl + axiosConfig.picIdentification
const store = useStore()

const success = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  router.push({ name: 'picIdentify', query: { resp: JSON.stringify(response) } })
  store.searchText = ''
}
</script>

<style scoped lang="scss"></style>
