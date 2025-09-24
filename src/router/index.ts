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
  // 定義路由 "/login"
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  // 定義沒有匹配到路由時...
  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

// 建立路由
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  // 判斷使用者有無 token
  const isLogin: boolean = localStorage.getItem("token") ? true : false;

  // login 和 register 公開對外
  if (to.path === "/login" || to.path === "/register") {
    next();
    // 其他頁面，要先判斷有無 token
  } else {
    isLogin ? next() : next("/login");
  }
});
// 導出路由
export { router };
