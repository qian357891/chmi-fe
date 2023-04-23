import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BackGround from '@/views/BackGround.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: BackGround
    },
    {
      path: '/item-info',
      name: 'itemInfo',
      component: () => import('../views/ItemInfo.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../components/utils/Chat.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/BackGround.vue')
    },
    {
      path: '/searched-items',
      name: 'searchedItems',
      component: () => import('../views/SearchedItems.vue')
    },
    {
      path: '/pic-identify',
      name: 'picIdentify',
      component: () => import('../views/PicIdentify.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 让页面回到顶部
  document.documentElement.scrollTop = 0
  next()
})

export default router
