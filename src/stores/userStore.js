/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-16 20:59:27
 * @LastEditors: Zhenjie
 */
//管理用户数据相关
import {ref} from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'

export const useUserStore = defineStore('user',()=>{
    const cartStore = useCartStore()
    //定义管理用户的state
    const userInfo = ref({})
    //定义获取接口函数的action函数
    const getUserInfo = async ({account,password})=>{
        const res = await loginAPI({account,password})
        userInfo.value = res.result
    }
    const clearUserInfo=()=>{
        //清除用户信息
        userInfo.value={}
        //清楚购物车
        cartStore.clearCart()
    }
    return{
        userInfo,
        getUserInfo,
        clearUserInfo
    }
    //以对象的形式return
},{
    persist: true
})