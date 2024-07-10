<!--
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-09 21:07:31
 * @LastEditors: Zhenjie
-->
 <script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

import {useCategoryStore} from '@/stores/categoryStore'
import { onMounted } from 'vue'

onMounted(() => {
  const categoryStore = useCategoryStore()
  categoryStore.getCategory()
})
</script>


<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <RouterView />
  <LayoutFooter></LayoutFooter>
</template>