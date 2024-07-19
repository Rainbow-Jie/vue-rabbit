/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-19 09:05:55
 * @LastEditors: Zhenjie
 */
//封装登录用户的相关接口函数

import request from '@/utils/http'
//账号登录
export const loginAPI = ({ account, password }) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}
//手机号登录
export const mobileLoginAPI = ({ mobile, code }) => {
  return request({
    url: '/login/code',
    method: 'POST',
    data: {
      mobile,
      code
    }
  })
}


export const getLikeListAPI = ({ limit = 4 }) => {
  return request({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}

export const getAddressAPI = () => {
  return request({
    url: '/member/address'
  })
}

export const addAddressAPI = (data) => {
  return request({
    url: '/member/address',
    method: 'POST',
    data
  })
}

export const delAddressAPI = (id) => {
  return request({
    url: `/member/address/${id}`,
    method: 'delete',
    params: {
      id
    }
  })
}

export const changeAddressAPI = (id) => {
  return request({
    url: '/member/address',
    method: 'get',
    params: {
      id
    }
  })
}