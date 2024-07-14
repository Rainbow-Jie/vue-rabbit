//封装分类数据内容相关的业务代码
import { ref , onMounted } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
    const categoryList = ref({})
    const route = useRoute()
    const getCategoryList = async (id = route.params.id) => {
        const res = await getCategoryAPI(id)
        categoryList.value = res.result
    }

    onMounted(() => {
        getCategoryList()
    })
    onBeforeRouteUpdate((to) => {
        getCategoryList(to.params.id)
    })
    return {
        categoryList
    }
}