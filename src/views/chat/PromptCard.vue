<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl m-20 text-gray-800">AI养生宝</h1>
    <el-row :gutter="12">
      <el-col :span="8" class="space-y-4">
        <div class="flex flex-col items-center space-y-2">
          <el-icon :size="25"><Sunny /></el-icon>
          <span>例子</span>
        </div>
        <el-card shadow="never"> 为我推荐一些清热解毒、凉消肿的药→ </el-card>
        <el-card shadow="never"> 我朋友20岁，他想知道肾虚该怎么治疗→ </el-card>
        <el-card shadow="never"> 我最近胃口不太好，怎么开胃呢→ </el-card>
      </el-col>

      <el-col :span="8" class="space-y-4">
        <div class="flex flex-col items-center space-y-2">
          <el-icon :size="25"><Compass /></el-icon>
          <span>能力</span>
        </div>
        <el-card shadow="never" class="card"> 在之前的谈话中， 记住用户说了什么 </el-card>
        <el-card shadow="never" class="card"> 进行快速、专业的医疗咨询 </el-card>
        <el-card shadow="never" class="card"> 拒绝不当请求 </el-card>
      </el-col>

      <el-col :span="8" class="space-y-4">
        <div class="flex flex-col items-center space-y-2">
          <el-icon :size="25"><Warning /></el-icon>
          <span>局限性</span>
        </div>
        <el-card shadow="never" class="card">
          该系统不能代表权威信息，请勿将该系统代替医疗问诊
        </el-card>
        <el-card shadow="never" class="card"> 一个问题可能需要多轮对话才会理解 </el-card>
        <el-card shadow="never" class="card"> 信息可能不具有时效性 </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.el-card {
  background: #f7f7f9;
  border: none;
  &:hover {
    background: #e7ecec;
    cursor: pointer;
  }
  @apply rounded-lg flex justify-center;
}

.card {
  &:hover {
    background: #f7f7f9;
    cursor: auto;
  }
}
</style>
