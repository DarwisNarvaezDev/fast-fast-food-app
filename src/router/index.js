import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopView.vue'
import PickMenuView from '../views/PickMenuView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import OrdersView from '../views/OrdersView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ShopView
  },
  {
    path: '/menu/:menuType',
    name: 'Menu',
    component: PickMenuView,
    meta: {reuse: false}
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutView
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: OrdersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
