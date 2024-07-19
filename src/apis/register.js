/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-18 09:52:21
 * @LastEditors: Zhenjie
 */
import request from '@/utils/http'
export const registerAPI = (data) =>{
    return request({
        url: '/register',
        method:'POST',
        data
    })
}

export const getCodeAPI = (mobile) =>{
    return request({
        url: '/register/code',
        method:'GET',
        params: {
            mobile
        }
    })
}