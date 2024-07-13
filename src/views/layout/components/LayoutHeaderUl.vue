<!--
 * @Description: logo右边的小组件
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-13 20:30:16
 * @LastEditors: Zhenjie
-->

<script setup>
import {useCategoryStore} from '@/stores/categoryStore'

const categoryStore = useCategoryStore()

</script>

<template>
  <ul class="app-header-nav">
    <li class="home">
      <RouterLink to="/">首页</RouterLink>
    </li>
    <!-- 使用v-for渲染页面 -->
    <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
      <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
    </li>
  </ul>
</template>


<style lang="scss">
.app-header-nav {
  width: 820px;
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    width: 38px;
    text-align: center;

    a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}
</style>