/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-09 11:23:37
 * @LastEditors: Zhenjie
 */
import axios from 'axios'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

//请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

//响应拦截器
httpInstance.interceptors.response.use(res => {
    return res.data
}, e => Promise.reject(e))


export default httpInstance