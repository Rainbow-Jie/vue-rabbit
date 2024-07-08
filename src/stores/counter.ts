/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-08 20:54:24
 * @LastEditors: Zhenjie
 */
// 从pinia中导入创建仓库的函数defineStore
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import axios from "axios";
const API_URL = 'http://geek.itheima.net/v1_0/channels'

// 导出pinia创建仓库的函数
export const userCounterStore = defineStore(
  "count",
  () => {
    // 定义数据
    const count = ref(1);

    // 定义修改数据的方法
    const increment = () => {
      count.value++;
    };

    // 定义getter
    let doubleCount = computed(() => count.value * 2);

      // 发起异步请求
    const list = ref([]);
    const getList = async () => {
      const res = await axios.get(API_URL);
      list.value = res.data.data.channels
    };

    // 以对象形式返回（外部可以访问）
    return { count, increment, doubleCount,list ,getList };
  },

  { persist: true }
);

