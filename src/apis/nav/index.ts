/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-09 11:26:27
 * @LastEditors: Zhenjie
 */
//导入axios
// import axios from 'axios'

//导入响应结果集对象
//导入nav中定义的所有数据对象，并统一起个类型别名: Nav
// import type * as Nav from './types/nav'

import httpInstance from "@/utils/http"

//定义函数并导出给外部使用
// export function getCategoryAPI(){
//     return axios.request<Nav.NavCategoryResponseData>({
//      url:"/api/home/category/head",  //请求路径
//      method:"get" //请求路径
//     })
//  }

export function getCategoryAPI(){
    //使用axios异步请求
    return httpInstance({
        //请求url
        url:'/home/category/head',
        //请求方式
        method:'get'
    })
}