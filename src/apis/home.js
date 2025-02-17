/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-13 21:11:44
 * @LastEditors: Zhenjie
 */
import httpInstance from '@/utils/http'


export function getBannerAPI(params={}) {

  const { distributtionSite = '1'} = params
    return httpInstance({
        url: '/home/banner',
        params: {
          distributtionSite
        }
    }) 
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
      url:'/home/new'
    })
  }

  /**
 * @description: 获取热门品牌
 * @param {*}
 * @return {*}
 */
export const findHotAPI = () => {
  return httpInstance({
    url:'/home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}

