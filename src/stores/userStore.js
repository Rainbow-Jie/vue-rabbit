//管理用户数据相关
import {ref} from 'vue'
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'

export const useUserStore = defineStore('user',()=>{
    //定义管理用户的state
    const userInfo = ref({})
    //定义获取接口函数的action函数
    const getUserInfo = async ({account,password})=>{
        const res = await loginAPI({account,password})
        userInfo.value = res.result
    }
    const clearUserInfo=()=>{
        userInfo.value={}
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