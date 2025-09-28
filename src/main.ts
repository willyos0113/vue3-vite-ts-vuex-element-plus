import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";

const app = createApp(App); // 創建 Vue 應用實例
app.use(router); // 使用 Vue Router
app.use(createPinia()); // 使用 Pinia 狀態管理
app.mount("#app"); // 掛載應用到 DOM 元素
