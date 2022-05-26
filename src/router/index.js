import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopView.vue'
import PickMenuView from '../views/PickMenuView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ShopView
  },
  {
    path: '/menu',
    name: 'pick-menu',
    component: PickMenuView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
