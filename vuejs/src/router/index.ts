import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SuccessView from '../views/SuccessView.vue'
import FailureView from '../views/FailureView.vue'
import DataView from '../views/DataView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/success',
      name: 'success',
      component: SuccessView
    },
    {
      path: '/failure',
      name: 'failure',
      component: FailureView
    },
    {
      path: '/data',
      name: 'data',
      component: DataView
    },
    
  ]
})

export default router