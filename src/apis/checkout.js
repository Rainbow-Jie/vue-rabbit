/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-16 21:43:56
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