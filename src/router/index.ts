import {
  createRouter, // 用來建立路由器實例
  createWebHistory, // 設定瀏覽器使用 HTML5 History API
  type RouteRecordRaw, // 定義路由物件的結構
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // 定義路由 "/"
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  // 定義路由 "/register"
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  // 定義沒有匹配到路由時...
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

// 導出路由 router
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
