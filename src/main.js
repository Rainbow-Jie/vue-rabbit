import { createApp } from "vue";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";

// 引入初始化样式文件
import "@/styles/common.scss";

// // 引入懒加载指令插件并且注册
// import { lazyPlugin } from '@/directives'
// 引入全局组件插件
import { componentPlugin } from "@/components";


// 第一步 : 导入pinia中的createPinia函数
import { createPinia } from "pinia";
// 第二步 : 创建pinia对象
const pinia = createPinia();
const app = createApp(App);
// 第三步 : 在vue全局注册pinia
app.use(pinia);

// 注册持久化插件
pinia.use(piniaPluginPersistedstate);
app.use(router);
// app.use(lazyPlugin)
app.use(componentPlugin);
app.mount("#app");
