import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/homeView.vue')
  },
  {
    path: '/nutrireq',
    name: 'nutriReq',
    component: () => import('@/views/nutritionalRequirements.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
