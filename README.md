# Vue 3 + TypeScript + Vite + ElementPlus + Vuex 練習專案

## 🚀 學習進度(更新中...)

- Set up

  - 建立 Vite 專案 (npm 指令)
  - Vue Router (路由相關 api)
  - Element Plus (自動導入)

- User register

  - 404 和 註冊頁面
  - 註冊表單 (雙向綁定、資料驗證、提交事件)
  - 後端 api 設計(採 spring-boot 架構)
  - 反向代理 (解決連 api 跨域問題)
  - 路由跳轉 (表單送出後，回首頁)

- User login

  - 登入頁面
  - 驗證 token 流程 (需配合後端驗證機制)
  - 抽離 CSS 至 App 層
  - 路由守衛 (前端限制可存取頁面)

- 請求攜帶 token 驗證

  - 請求攜帶 token
  - 請求和回應攔截
  - 解析 token
  - JWT 驗證身分的優點

- Pinia 全域狀態管理

  - 說明
  - 實作 token 全域狀態管理

## ⚙️ 相關 API 型態工具

- `vue`

  - `ref, reactive` - 建立響應變數

- `vue-router`

  - `RouteRecordRaw` - 定義路由物件的結構
  - `createRouter` - 建立路由實例
  - `createWebHistory` - 設定 HTML5 History API
  - `useRouter` - 呼叫路由實例
  - `router.beforeEach` - 配置前端請求/回應的攔截器

- `element-plus`

  - `FormInstance` - 表單驗證

- `axios`

  - `post` - 向後端發送 POST 請求
  - `interceptors.request.use` - 請求攔截器
  - `interceptors.response.use` - 回應攔截器

- `pinia`

  - `defineStore` - 定義 Pinia 全域狀態管理單元(一個 store)
  - `createPinia` - 建立 Pinia 實例並掛載至應用程式

- `jwt-decode` - jwt 解析器
