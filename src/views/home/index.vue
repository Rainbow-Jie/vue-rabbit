<!--
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-09 21:14:20
 * @LastEditors: Zhenjie
-->
<script setup>
import HomeCategory from '@/views/home/components/HomeCategory.vue'
import HomeBanner from '@/views/home/components/HomeBanner.vue'
import HomeHot from '@/views/home/components/HomeHot.vue'
import HomeNew from '@/views/home/components/HomeNew.vue'
import HomeProduct from '@/views/home/components/HomeProduct.vue'
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