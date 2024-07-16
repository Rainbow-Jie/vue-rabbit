/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-16 09:04:19
 * @LastEditors: Zhenjie
 */
//封装登录用户的相关接口函数

import request from '@/utils/http'

export const loginAPI = ({account,password}) =>{
    return request({
        url: '/login',
        method:'POST',
        data:{
            account,
            password
        }
    })
}