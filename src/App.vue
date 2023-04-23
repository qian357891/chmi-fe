<template>
  <div class="index">
    <Suspense>
      <div>
        <el-backtop :right="100" :bottom="100" />
        <RouterView />
      </div>
    </Suspense>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
