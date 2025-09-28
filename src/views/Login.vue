<script setup lang="ts">
import { reactive, ref } from "vue";
import { type RegisterType, type RegisterRulesType } from "../utils/types";
import { type FormInstance } from "element-plus";
import axios from "axios";
import { useRouter } from "vue-router";
import { jwtDecode } from "jwt-decode";
import { useAuthStore } from "../store";

// 定義響應變數
const ruleFormRef = ref<FormInstance>();
const router = useRouter();
const store = useAuthStore();
const loginUser = ref<RegisterType>({
  email: "willyos0113@gmail.com",
  password: "123456",
});

// 表單欄位驗證規則
const rules = reactive<RegisterRulesType>({
  email: [
    {
      required: true,
      type: "email",
      message: "郵件地址格式不正確",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "密碼不得為空", trigger: "blur" },
    { min: 6, max: 30, message: "長度必須為6~30字元", trigger: "blur" },
  ],
});

// 處理登入表單提交(沿用註冊的函數)
const handleSubmit = (forEl: FormInstance | undefined) => {
  if (!forEl) return;

  // 調用 validate( () => void ) 驗證邏輯
  forEl.validate(async (valid: boolean) => {
    if (valid) {
      const {
        data: {
          success,
          data: { accessToken },
        },
      } = await axios.post("/api/users/login", loginUser.value);

      if (success && accessToken) {
        // 將 token 存入 localStorage
        localStorage.setItem("token", accessToken);

        // 解析 token
        const decode = jwtDecode(accessToken);
        console.log(decode);

        // 將 token 更新至 store 狀態
        store.setAuthenticated(!!decode);
        store.setUser(decode);

        // 調用 ElMessage( {config} ) 顯示成功訊息
        // @ts-ignore
        ElMessage({
          message: "使用者登入成功",
          type: "success",
        });
      }
      // 調用 push(url) 實現頁面跳轉回首頁
      router.push("/");
    } else {
      console.log("submit error");
    }
  });
};
</script>

<template>
  <div class="login">
    <section class="form-container">
      <div class="manage-tip">
        <span class="title">後台管理系統</span>
        <el-form
          :rules="rules"
          ref="ruleFormRef"
          :model="loginUser"
          class="login-form"
          label-width="80px"
        >
          <el-form-item label="郵件" prop="email">
            <el-input
              v-model="loginUser.email"
              placeholder="請輸入郵件"
            ></el-input>
          </el-form-item>
          <el-form-item label="密碼" prop="password">
            <el-input
              v-model="loginUser.password"
              placeholder="請輸入密碼"
              type="password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleSubmit(ruleFormRef)" class="submit-btn"
              >登入</el-button
            >
          </el-form-item>

          <div class="tip-area">
            <p>
              還沒有帳號? 現在<router-link to="/register">註冊</router-link>
            </p>
          </div>
        </el-form>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
