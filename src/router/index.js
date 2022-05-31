import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopView.vue'
import PickMenuView from '../views/PickMenuView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ShopView
  },
  {
    path: '/menu/:menuType',
    name: 'pick-menu',
    component: PickMenuView,
    meta: {reuse: false}
  },
  {
    path: '/checkout',
    name: 'asdasdasd',
    component: CheckoutView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
