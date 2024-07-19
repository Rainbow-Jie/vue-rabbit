/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-19 10:51:06
 * @LastEditors: Zhenjie
 */
import request from '@/utils/http'

export const getOrderAPI = (id) => {
  return request({
    url: `/member/order/${id}`
  })
}

