/*
 * @Description: 封装购物车模块
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-16 19:59:06
 * @LastEditors: Zhenjie
 */

import {defineStore} from 'pinia'
import { computed, ref } from 'vue'


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
    //删除购物车选项
    const delCart = (skuId)=>{
        const index = cartList.value.findIndex((item)=>{skuId===item.skuId})
        cartList.value.splice(index,1)
    }
    //计算头部购物车
    const allCount = computed(()=>{
         cartList.value.reduce((a,c)=>a + c.count,0)
    })
    const allPrice = computed(()=>{
         cartList.value.reduce((a,c)=>a + c.count*c.price,0)
    })
    //计算购物车已选数据渲染
    const selectCount = computed(()=>{
        cartList.value.filter(item=>item.selected).reduce((a,c)=>a + c.count,0)
   })

   const selectPrice = computed(()=>{
        cartList.value.filter(item=>item.selected).reduce((a,c)=>a + c.count*c.price,0)
   })

    //单选功能
    const singleCheck = (skuId,selected)=>{
        const item = cartList.value.find((item)=>item.skuId === skuId)
        item.selected = selected
    }

    //全选
    const isAll = computed(()=>{
        cartList.value.every((item)=>{item.selected})
    })
    const allCheck = (selected)=>{
        cartList.value.forEach(item=>{
            item.selected = selected
        })
    }

    
    return {
        cartList,
        allCount,
        allPrice,
        addCart,
        delCart,
        singleCheck,
        isAll,
        allCheck,
        selectCount,
        selectPrice
    }
},{
    persist:true
})