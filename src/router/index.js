/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-15 15:49:55
 * @LastEditors: Zhenjie
 */
// createRouter：创建router实例对象
// createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from 'vue-router'
import layout from '@/views/layout/index.vue'
import login from '@/views/login/index.vue'
import home from '@/views/home/index.vue'
import category from '@/views/category/index.vue'
import subCategory from '@/views/subCategory/index.vue'
import goods from '@/views/goods/index.vue'
import cartList from '@/views/cartList/index.vue'
import checkout from '@/views/checkout/index.vue'
import pay from '@/views/pay/index.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和component对应关系的位置
  routes: [
    {
      //一级路由
      path: '/',
      component: layout,
      children:[
        {
          path: '',
          component: home
        },
        {
          path:'category/:id',
          component: category
        },
        {
          path:'category/sub/:id',
          component: subCategory
        },
        {
          path:'detail/:id',
          component: goods
        },
        {
          path:'cartlist',
          component: cartList
        },
        {
          path:'checkout',
          component: checkout
        },
        {
          path:'pay',
          component: pay
        }
      ]
    },
    {
      path: '/login',
      component: login
    }
  ],
  // 路由滚动行为定制
  scrollBehavior () {
    return {
      top: 0
    }
  }
})

export default router
