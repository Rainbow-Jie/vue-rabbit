/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-16 23:15:05
 * @LastEditors: Zhenjie
 */
import request from '@/utils/http'

export const getOrderAPI = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}