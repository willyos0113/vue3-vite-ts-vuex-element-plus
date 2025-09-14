import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // Element Plus 自動導入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 新增代理路徑 - 由 vite 將開頭為 "/api" 路徑的請求，轉發至 port 8080
  server: {
    proxy: {
      "/api": "http://localhost:8080/vue3-element-plus-api-server",
    },
  },
});
