<script setup lang="ts">
import { ref } from 'vue'
import Search from '../components/function/Search.vue'
import TypeSelect from './tag/TypeSelect.vue'
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
      <div class="tab">
        <TypeSelect />
      </div>
    </section>

    <!-- Main -->
    <main class=""></main>
  </div>
</template>

<style lang="scss" scoped>
.tab {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;

  .tab-item {
    flex-basis: calc(10% - 20px);
    text-align: center;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background-color: #f1f1f1;
    }

    &.active {
      background-color: #007bff;
      color: #fff;
    }
  }
}

//

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
  background: #eee;
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
