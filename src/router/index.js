import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { requiredAuth: true },
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiredAuth)) {
    if (store.getters.isLogin) {
      next()
      return
    }
    router.push('/login')
  } else {
    if (to.name === 'login' && store.getters.isLogin) {
      router.push('/')
    } else {
      next()
    }
  }
})

export default router
