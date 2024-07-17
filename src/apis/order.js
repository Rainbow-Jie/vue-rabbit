/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-17 14:45:42
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