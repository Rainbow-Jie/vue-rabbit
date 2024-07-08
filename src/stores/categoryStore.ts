import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryAPI } from "@/apis/nav"
import { type NavCategoryData } from "@/apis/nav/types/nav"


//定义导航类目存储器对象
export const useCategoryStore = defineStore('category', () => {
    //数据
    const categoryList = ref<NavCategoryData>()

    //异步action函数
    const getCategory = async () => {
        //通过getCategoryAPI获取导航类目数据
        const result = await getCategoryAPI()
        //把查询的导航类目数据，赋值给categoryList
        categoryList.value = result.data.result
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