import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 重复点击路由报错解决
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
  return originalPush.call(this, location).catch(err => {})
};

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:"/home",  //路由重定向
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category',
    name: "Category",
    component: () => import(/* webpackChunkName: "category" */ '../views/Category.vue')
  },
  {
    path: '/user',
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/cart',
    name: "Cart",
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/product',
    name: "Product",
    component: () => import(/* webpackChunkName: "product" */ '../views/Product.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
