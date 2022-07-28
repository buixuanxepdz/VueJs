import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product',
    name: 'product',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
  },
  {
    path: '/product-small',
    name: 'productsmall',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductView2.vue')
  },
  {
    path: '/receipt',
    name: 'receipt',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReceiptView.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import(/* webpackChunkName: "about" */ '../views/ChartView.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderView.vue')
  },
  {
    path: '/client',
    name: 'client',
    component: () => import(/* webpackChunkName: "about" */ '../views/ClientView.vue')
  },
  {
    path: '/sale',
    name: 'sale',
    component: () => import(/* webpackChunkName: "about" */ '../views/SaleView.vue')
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: () => import(/* webpackChunkName: "about" */ '../views/InventoryView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/SettingView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: () => import(/* webpackChunkName: "about" */ '../views/ForgotPasswordView.vue')
  },
  {
    path: '/users/:id',
    name: 'users',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserView.vue'),
    children:[
        {
          path: 'profile',
          name: 'userProfile',
          component: () => import(/* webpackChunkName: "about" */ '../views/ProfileView.vue')
        },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
