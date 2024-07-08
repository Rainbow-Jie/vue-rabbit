<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { onMounted } from 'vue'

//导入pinia存储对象：导航分类
import { useCategoryStore } from '@/stores/categoryStore'

//定义对象接收useCategoryStore中返回的内容
const categoryStore =  useCategoryStore();

//调用action函数
onMounted(()=>{categoryStore.getCategory()})

</script>

<template>
  <LayoutFixed /><!-- 吸顶导航(分类导航) -->
  <LayoutNav /> <!-- 用户中心导航 -->
  <LayoutHeader /><!-- 顶部导航(分类导航) -->

  <!-- 二级路由 -->
  <RouterView />
  
  <LayoutFooter /> <!-- 底部 -->
</template>