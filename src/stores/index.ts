import type { ManyPreMedicinalInfo } from '@/entry/PreMedicinalInfo'
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      loading: false,
      searchText: '',
      cameraActive: false,
      showPreMedicinalInfo: {} as ManyPreMedicinalInfo
    }
  },
  actions: {}
})
