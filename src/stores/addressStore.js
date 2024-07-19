import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getAddressAPI, addAddressAPI, delAddressAPI, changeAddressAPI } from '@/apis/user'

export const useAddressStore = defineStore('addressStore', () => {
    //数据
    const addressList = ref([])

    //更新获取地址
    const updateAddress = async () => {
        const res = await getAddressAPI()
        addressList.value = res.result
    }

    //新增地址
    const addAddress = async ({receiver,contact,fullLocation,address}) => {
        await addAddressAPI({receiver,contact,fullLocation,address})
        updateAddress()
    }

    //删除地址
    const delAddress = async (id) => {
        await delAddressAPI(id)
        updateAddress()
    }

    //修改地址
    const changeAddress = async (id) => {
        await changeAddressAPI(id)
        updateAddress()
    }

    //返回
    return {
        addressList,
        updateAddress,
        addAddress,
        delAddress,
        changeAddress
    }
}
)