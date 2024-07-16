//封装购物车木块模块

import {defineStore} from 'pinia'
import { ref } from 'vue'


export const useCartStore = defineStore('cart',()=>{
    const cartList = ref([])
    const addCart =(goods)=>{
        const item = cartList.value.find((item)=>goods.skuId === item.skuId)
        if(item){
            //添加过
            item.count++
        }else{
            //未添加
            cartList.value.push(goods)
        }
        console.log(cartList);
           
    }
    return {
        cartList,
        addCart
    }
},{
    persist:true
})