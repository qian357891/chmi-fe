<script setup lang="ts">
import Search from '../components/function/Search.vue'
import AboutView from './AboutView.vue'
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="et-hero-tabs">
      <h1>智慧中草药识别推荐系统</h1>
      <h3>Wisdom Chinese herbal medicine identification and recommendation system</h3>
      <!-- 搜索框 -->
      <main class="search">
        <Search />
      </main>
      <el-upload class="upload-demo" drag action="" multiple>
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">将图片拖到这里 或者 <em>点击上传图片</em></div>
        <template #tip>
          <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
        </template>
      </el-upload>
    </section>

    <!-- Main -->
    <main class="">
      <AboutView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.search {
  height: 40%;
  display: flex;
}

body {
  font-family: 'Century Gothic', 'Lato', sans-serif;
}

a {
  text-decoration: none;
}

.et-hero-tabs,
.et-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  text-align: center;
  padding: 0 2em;
  h1 {
    font-size: 2rem;
    margin: 0;
    letter-spacing: 1rem;
  }
  h3 {
    font-size: 1rem;
    letter-spacing: 0.3rem;
    opacity: 0.6;
  }
}

@media (min-width: 800px) {
  .et-hero-tabs,
  .et-slide {
    h1 {
      font-size: 3rem;
    }
    h3 {
      font-size: 1rem;
    }
  }
  .et-hero-tab {
    font-size: 1rem;
  }
}
</style>
