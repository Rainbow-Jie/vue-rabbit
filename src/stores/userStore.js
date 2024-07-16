/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-16 21:10:07
 * @LastEditors: Zhenjie
 */
//管理用户数据相关
import {ref} from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '@/apis/cart'

export const useUserStore = defineStore('user',()=>{
    const cartStore = useCartStore()
    //定义管理用户的state
    const userInfo = ref({})
    //定义获取接口函数的action函数
    const getUserInfo = async ({account,password})=>{
        const res = await loginAPI({account,password})
        userInfo.value = res.result
        await mergeCartAPI(cartStore.cartList.map(item=>{
            return {
               skuId: item.skuId,
               selected: item.selected,
               count: item.count 
            }
        }))
        cartStore.updateNewList()
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