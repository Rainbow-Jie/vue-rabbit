/*
 * @Description: 
 * @Author: Zhenjie
 * @LastEditTime: 2024-07-16 10:00:07
 * @LastEditors: Zhenjie
 */

import { createApp } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { lazyPlugin } from '@/directives'
import App from "./App.vue";
import router from "./router";
import { componentPlugin } from '@/components'
import { createPinia } from "pinia";
// 引入初始化样式文件
import "@/styles/common.scss";

const app = createApp(App);
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router);
app.use(lazyPlugin);
app.use(componentPlugin)

app.mount("#app");




