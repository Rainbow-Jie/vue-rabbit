/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-13 16:34:22
 * @LastEditors: Zhenjie
 */

import { createApp } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { lazyPlugin } from '@/directives'
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// 引入初始化样式文件
import "@/styles/common.scss";

const app = createApp(App);
app.use(createPinia())
app.use(router);
app.use(lazyPlugin);

app.mount("#app");




