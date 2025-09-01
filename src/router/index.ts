import {
  createRouter, // 用來建立路由器實例
  createWebHistory, // 設定瀏覽器使用 HTML5 History API
  type RouteRecordRaw, // 定義路由物件的結構
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // 定義路由 "/"
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
];

// 導出路由 router
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
