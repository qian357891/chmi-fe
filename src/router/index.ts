import { createRouter, createWebHistory } from 'vue-router'
import Demo from '../views/Demo.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: HomeView,
      children: [
        {
          path: 'classification',
          name: 'demo',
          component: Demo
        },
        {
          path: 'common-symptom',
          name: 'demo',
          component: Demo
        },
        {
          path: 'tab-1',
          name: 'demo',
          component: Demo
        },
        {
          path: 'tab-2',
          name: 'demo',
          component: Demo
        }
      ]
    },
    {
      path: '/item-info',
      name: 'itemInfo',
      component: () => import('../views/ItemInfo.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../components/function/Chat.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('../views/Demo.vue')
    },
    {
      path: '/chat-demo',
      name: 'chat-demo',
      component: () => import('../components/function/demo/ChatDemo.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 让页面回到顶部
  document.documentElement.scrollTop = 0
  next()
})

export default router
