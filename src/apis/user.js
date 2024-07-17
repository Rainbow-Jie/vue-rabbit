/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-17 14:32:07
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


export const getLikeListAPI = ({ limit = 4 }) => {
    return request({
      url:'/goods/relevant',
      params: {
        limit 
      }
    })
  }