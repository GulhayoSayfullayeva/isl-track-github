import { createRouter, createWebHistory } from 'vue-router'

import ContainerStatus from '../views/ContainerStatus.vue'
import PortCalls from '@/views/PortCalls.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/containerStatus',
    name: 'containerStatus',
    component: ContainerStatus
  },
  {
    path: '/portCalls',
    name: 'portCalls',
    component: PortCalls
  },
  ],
})

export default router
