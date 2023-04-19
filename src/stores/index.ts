import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return {
      loading: true,
      searchText: '',
      cameraActive: false
    }
  },
  actions: {}
})
