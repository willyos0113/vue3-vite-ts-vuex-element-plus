import {
  createRouter, // 用來建立路由器實例
  createWebHistory, // 設定路由模式為 HTML5 的 History 模式
  type RouteRecordRaw, // 定義路由記錄的型態
} from "vue-router";

// 1. 定義路由陣列，包含每個路由的路徑、名稱和對應的組件
const routes: Array<RouteRecordRaw> = [
  // (1) 定義路由 "/"
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    children: [
      // a. 預設子路由
      { path: "", component: () => import("../views/Index.vue") },
      // b. 其他子路由
      { path: "/userinfo", component: () => import("../views/UserInfo.vue") },
    ],
  },
  // (2) 定義路由 "/register"
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  // (3) 定義路由 "/login"
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  // (4) 定義 404 頁面路由，捕捉所有未定義的路由
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

// 2. 創建路由器實例
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // (1) 驗證是否登入
  const isLogin: boolean = localStorage.getItem("token") ? true : false;

  // (2) 如果是登入或註冊頁面，直接放行
  if (to.path === "/login" || to.path === "/register") {
    next();
    // (3) 其他頁面需要驗證
  } else {
    isLogin ? next() : next("/login");
  }
});

// 3. 導出路由器實例
export { router };
