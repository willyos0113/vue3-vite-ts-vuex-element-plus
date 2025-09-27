import axios from "axios";
import { router } from "../router/index.ts";

// 請求攔截器
axios.interceptors.request.use(
  // 設定請求後方的配置物件
  (config) => {
    // 判斷是否攜帶 token
    if (localStorage.getItem("token")) {
      config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    } else {
    }
    return config;
  },
  // 建構上方設定物件失敗時會進入這裡
  (error) => {
    return Promise.reject(error);
  }
);

// 回應攔截器
axios.interceptors.response.use(
  // 狀態碼 2xx 都會進入這裡
  (response) => {
    return response;
  },
  // 狀態碼 4xx, 5xx 都會進入這裡
  (error) => {
    const { status } = error.response;
    if (status === 401) {
      // 清除 token
      localStorage.removeItem("token");
      // 跳轉登入頁面
      router.push("/login");
    }
    return Promise.reject(error);
  }
);

export default axios;
