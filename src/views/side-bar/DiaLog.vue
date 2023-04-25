<template>
  <div style="padding: 20px">
    <el-button @click="visible = true">
      <el-icon><QuestionFilled /></el-icon> 这是什么？
    </el-button>
    <el-dialog v-model="visible">
      <template #header="{ titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">这是什么？</h4>
        </div>
      </template>
      <span>
        中药作为我国传统药物治疗方式之一，在临床实践中具有广泛的应用和重要的地位。但是，中药的种类繁多，药材质量和炮制过程也会对药效产生影响，因此对中药的识别和选择是一项具有挑战性的任务。此外，由于中药治疗涉及个体差异、药物剂量和疗程等因素，对中药的使用也需要有一定的经验和技能。因此，开发一款中药识别推荐系统可以帮助医务人员和患者快速准确地识别中药，并提供合理的用药建议，从而提高中药治疗的效果和安全性。同时，中药识别推荐系统也可以为中药研究和开发提供有益的数据支持和参考。
        该系统采用深度学习算法，利用RestNet模型对中药进行识别，并采用推荐算法进行推荐。此外，该系统还利用已知的中药问诊对话数据，通过基于Transformer模型和Seq2Seq的训练，开发了一个聊天对话机器人，从而实现了在线问诊功能。
        该系统为国内首创，不仅集成了深度学习图像识别功能，还通过大量真实的问诊数据基于transform注意力机制实现在线问诊功能。
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="visible = false"> 明白了 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import { QuestionFilled } from '@element-plus/icons-vue'

const visible = ref(false)
</script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
