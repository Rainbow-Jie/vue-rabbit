/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-13 20:52:45
 * @LastEditors: Zhenjie
 */
import request from '@/utils/http'

export function getCategoryAPI(id) {
    return request({
        url: '/category',
        params: {
            id
        }
    })
}