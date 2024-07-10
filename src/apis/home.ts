/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-10 20:55:31
 * @LastEditors: Zhenjie
 */
import httpInstance from '@/utils/http'


export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    }) 
}