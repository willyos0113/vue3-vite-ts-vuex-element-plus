import { defineStore } from "pinia";
import { type UserType } from "../utils/types";

export const useAuthStore = defineStore("auth", {
  // 定義 isAuthenticated, user 狀態
  state: () => {
    return { isAuthenticated: false, user: {} };
  },
  getters: {
    // 獲取狀態 (因 state 本質為公開存取，這邊的 getter 可有可無)
    getAuthenticated: (state) => state.isAuthenticated,
    getUser: (state) => state.user,
  },
  actions: {
    // 修改 isAuthenticated 狀態
    setAuthenticated(isAuth: boolean) {
      if (isAuth) {
        this.isAuthenticated = isAuth;
      } else {
        this.isAuthenticated = false;
      }
    },
    // 修改 user 狀態
    setUser(user: UserType | null) {
      if (user) {
        this.user = user;
      } else {
        this.user = {};
      }
    },
  },
});
