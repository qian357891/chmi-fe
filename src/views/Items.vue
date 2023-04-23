<template>
  <el-space class="pointer" direction="vertical" alignment="flex-start">
    <el-skeleton style="width: 240px" :loading="useStore().loading" animated>
      <template #template>
        <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="h3" style="width: 50%" />
          <div class="el-items">
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <el-card :body-style="{ padding: '0px', marginBottom: '1px' }" class="wrap">
          <el-image style="width: 240px; height: 240px" :src="img" class="image" lazy />
          <div class="pre-info" style="padding: 14px">
            <span>{{ name }}</span>
            <div class="bottom card-header">
              <div :title="effect" class="text">{{ effect }}</div>
            </div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
  </el-space>
</template>

<script lang="ts" setup>
import { useStore } from '@/stores'

let { img, name, effect } = defineProps(['img', 'name', 'effect'])
</script>

<style lang="scss" scoped>
.pointer {
  cursor: pointer;
  &:hover {
    box-shadow: 5px 5px 5px 5px rgb(206, 206, 206);
    transform: translate(0, 0);
    transition: all 0.2s ease-in 0s;
  }
}
// 展示框的padding修改
:deep(.el-space__item) {
  padding: 0px !important;
}
.el-items {
  overflow: hidden;
}
.wrap {
  width: 240px;
  height: 335px;
}
.text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
