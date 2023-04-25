<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <SideBar />
      </el-aside>
      <el-container>
        <el-main style="height: 700px">
          <div>
            <div class="wrap">
              <div>
                <div class="demo-image__preview">
                  <el-image
                    style="width: 300px; height: 300px"
                    :src="url"
                    :zoom-rate="1.2"
                    :preview-src-list="srcList"
                    :initial-index="4"
                    fit="cover"
                  />
                </div>
                <span>点击图像查看大图</span>
              </div>

              <div class="preInfo">
                <el-descriptions direction="vertical" :column="4" border>
                  <el-descriptions-item label="药材名">{{ info.name }}</el-descriptions-item>
                  <el-descriptions-item label="别名">
                    {{ info.alias }}
                  </el-descriptions-item>
                  <el-descriptions-item label="类型" :span="2">{{
                    info.type
                  }}</el-descriptions-item>
                  <el-descriptions-item label="禁忌">
                    {{ info.taboo }}
                  </el-descriptions-item>
                  <el-descriptions-item label="药效">{{ info.effect }} </el-descriptions-item>
                  <el-descriptions-item label="用量">{{ info.usage }} </el-descriptions-item>
                  <el-descriptions-item label="推荐公式">{{ info.formula }}</el-descriptions-item>
                </el-descriptions>
              </div>
            </div>
            <main style="display: flex; flex-direction: column; align-items: center">
              <div style="width: 1000px">
                <div>
                  <label>形态</label>
                  <p>{{ info.morphology }}</p>
                </div>
                <div>
                  <label>分布</label>
                  <p>{{ info.distribution }}</p>
                </div>
                <div>
                  <label>分布</label>
                  <p>{{ info.distribution }}</p>
                </div>
                <div>
                  <label>处理</label>
                  <p>{{ info.processing }}</p>
                </div>
                <div>
                  <label>特征</label>
                  <p>{{ info.properties }}</p>
                </div>
                <div>
                  <label>成分</label>
                  <p>{{ info.constituent }}</p>
                </div>
              </div>
            </main>
            <footer style="display: flex; align-items: center; flex-direction: column">
              <h1>为您推荐</h1>
              <el-divider />
              <Recommend :data="data" />
            </footer>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { axiosGet } from '@/axios/api'
import { axiosConfig } from '@/axios/axios.config'
import type { ReqMedicinalInfo } from '@/entry/MedicinalInfo'
import Recommend from './recommend/Recommend.vue'
import SideBar from './side-bar/SideBar.vue'

const route = useRoute()
const { id } = route.query
const data: ReqMedicinalInfo = (await axiosGet(`${axiosConfig.selectById}?itemId=${id}`)).data
const info = data.data

const url = info.img[0]
const srcList = info.img
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  * {
    margin: 10px;
  }
  .preInfo {
    width: 1000px;
  }
}

.demo-image__error .image-slot {
  font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>
