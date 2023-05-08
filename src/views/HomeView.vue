<script setup lang="ts">
import Search from '../components/utils/Search.vue'
import AboutView from './AboutView.vue'
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="et-hero-tabs">
      <h1>
        <img src="../components/icons/boot1.svg" width="80" style="position: relative; top: 10px" />
        <span style="color: darkgoldenrod;"> AI养生宝</span>
      </h1>
      <!-- 搜索框 -->
      <main class="search">
        <Search />
      </main>
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
    font-size: 1rem;
    letter-spacing: 0.3rem;
    opacity: 0.65;
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
