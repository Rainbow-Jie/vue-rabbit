/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-16 23:07:33
 * @LastEditors: Zhenjie
 */
import request from '@/utils/http'
/**
 * 获取结算信息
 */
export const getCheckoutInfoAPI = () => {
  return request({
    url:'/member/order/pre'
  })
}

export const createOrderAPI = (data)=>{
  return request({
    url:'/member/order',
    method: 'POST',
    data
  })
}