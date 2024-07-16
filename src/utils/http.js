/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-16 11:28:51
 * @LastEditors: Zhenjie
 */
import axios from 'axios'
import { ElMessage } from 'element-plus'
import {useUserStore } from '@/stores/userStore'
import  router  from '@/router';

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

//请求拦截器
httpInstance.interceptors.request.use(config => {
    //从pinia获取token数据
    const userStore = useUserStore()
    const token = userStore.userInfo.token
    if(token){
        config.headers.Authorization= `Bearer ${token}`
    }
    return config
}, e => Promise.reject(e))

//响应拦截器
httpInstance.interceptors.response.use(res => {
    return res.data
}, e => {
    const userStore = useUserStore()
    ElMessage({
        type:'warning',
        message:e.response.data.message
    })
    //401token失效处理
    if(e.response.status===401){
        userStore.clearUserInfo()
        router.push('/login')
    }
    return Promise.reject(e)
})



export default httpInstance