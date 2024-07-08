//导入axios
import axios from 'axios'

//导入响应结果集对象
//导入nav中定义的所有数据对象，并统一起个类型别名: Nav
import type * as Nav from './types/nav'

//定义函数并导出给外部使用
// export function getCategoryAPI(){
//     return axios.request<Nav.NavCategoryResponseData>({
//      url:"/api/home/category/head",  //请求路径
//      method:"get" //请求路径
//     })
//  }

export function getCategoryAPI(){
    //使用axios异步请求
    return axios.request<Nav.NavCategoryResponseData>({
        //请求url
        url:'/api/home/category/head',
        //请求方式
        method:'get'
    })
}