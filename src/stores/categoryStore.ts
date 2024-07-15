/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-14 17:38:46
 * @LastEditors: Zhenjie
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryAPI } from "@/apis/layout/layout"


//定义导航类目存储器对象
export const useCategoryStore = defineStore('categoryStore', () => {
    //数据
    const categoryList = ref([])

    //异步action函数
    const getCategory = async () => {
        //通过getCategoryAPI获取导航类目数据
        const res = await getCategoryAPI()
        //把查询的导航类目数据，赋值给categoryList
        categoryList.value = res.result
    }

    //返回
    return {
        categoryList,
        getCategory
    }
},
    //本地持久化存储
    { persist: true }
)