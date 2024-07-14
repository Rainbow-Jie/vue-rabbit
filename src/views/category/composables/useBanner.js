/*
 * @Description: 封装banner轮播图相关的业务代码
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-14 14:31:34
 * @LastEditors: Zhenjie
 */
import { ref , onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'

export function useBanner() {
    const bannerList = ref([])
    const getBanner = async () => {
        const res = await getBannerAPI(
            {
                distributtionSite: '2'
            }
        )
        bannerList.value = res.result
    }

    onMounted(()=>{
        getBanner()
    })

    return {
        bannerList
    }
}