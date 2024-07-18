/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-17 20:39:40
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