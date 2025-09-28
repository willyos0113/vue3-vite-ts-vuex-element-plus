<script setup lang="ts">
import { watchEffect } from "vue";
import { jwtDecode } from "jwt-decode";
import { useAuthStore } from "./store";

const store = useAuthStore();

// 監聽 localStorage 中 token 的變化，並更新 store 狀態
// (因 token 非響應式，watchEffect 不會追蹤 token 的變化)
watchEffect(() => {
  // 讀取 localStorage 中的 token
  const token = localStorage.getItem("token");
  if (token) {
    // 解析 token
    const decode = jwtDecode(token);

    // 將 token 更新至 store 狀態
    store.setAuthenticated(!!decode);
    store.setUser(decode);
  }
});
</script>

<template>
  <!-- 當使用者 URL 變更時，查詢 index.ts 中對應的元件並渲染它 -->
  <router-view></router-view>
</template>

<style>
/* App 的 CSS */
html,
body,
#app {
  width: 100%;
  height: 100%;
}

/* Login, Register 共用的 CSS */
.register,
.login {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(./assets/bg.jpg) no-repeat center center;
  background-size: 100% 100%;
}
.form-container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 10%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}
.form-container .manage-tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}
.register-form,
.login-form {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
.submit-btn {
  width: 100%;
}
.tip-area {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tip-area p a {
  color: #409eff;
}
</style>
