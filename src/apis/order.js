/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-19 10:53:22
 * @LastEditors: Zhenjie
 */
import request from '@/utils/http'
/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrder = (params) => {
    return request({
      url:'/member/order',
      method:'GET',
      params
    })
  }

  export const cancelOrderAPI = (id) => {
    return request({
      url: `/member/order/${id}/cancel`,
      method: 'PUT',
      params:{
        id
      }
    })
  }