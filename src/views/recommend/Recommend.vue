<template>
  <div>
    <div>
      <div class="infinite-list-wrapper" style="display: flex; flex-wrap: wrap">
        <div v-for="recommend in data.recommend" :key="recommend.id" style="margin: 20px">
          <items
            :img="recommend.img[0]"
            :name="recommend.name"
            :effect="recommend.effect"
            :item="recommend"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ReqMedicinalInfo } from '@/entry/MedicinalInfo'
import Items from '../Items.vue'
import type { SearchedInfo } from '@/entry/SearchedInfo'

const { data } = defineProps<{
  data: ReqMedicinalInfo | SearchedInfo
}>()
</script>

<style scoped lang="scss"></style>
