<template>
  <div>
    <Suspense>
      <div>
        <el-backtop :right="100" :bottom="100" />
        <RouterView :key="route.fullPath" />
      </div>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style scoped></style>
