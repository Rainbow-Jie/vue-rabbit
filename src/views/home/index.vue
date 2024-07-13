<!--
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-13 11:56:36
 * @LastEditors: Zhenjie
-->
<script setup>
import HomeCategory from '@/views/home/components/HomeCategory.vue'
import HomeBanner from '@/views/home/components/HomeBanner.vue'
import HomeHot from '@/views/home/components/HomeHot.vue'
import HomeNew from '@/views/home/components/HomeNew.vue'
import HomeProduct from '@/views/home/components/HomeProduct.vue'
import HomePanel from '@/views/home/components/HomePanel.vue'
// import XtxBanner from '@/views/layout/components/XtxBanner.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
    <!-- <XtxBanner></XtxBanner> -->
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
</template>