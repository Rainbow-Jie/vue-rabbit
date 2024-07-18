/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-17 20:37:44
 * @LastEditors: Zhenjie
 */
//封装购物车相关接口

import request from '@/utils/http'

//加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return request({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

// 删除购物车
export const delCartAPI = (ids) => {
  return request({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

//获取购物车列表
export const findCartListAPI = () => {
  return request({ url: '/member/cart' })
}

//合并购物车
export const mergeCartAPI = (data) => {
  return request({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}