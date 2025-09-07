<script setup lang="ts">
import { reactive, ref } from "vue";
import { type RegisterType, type RegisterRulesType } from "../utils/types";

// 定義響應變數
const registerUser = ref<RegisterType>({
  name: "Mr.王",
  email: "willyos0113@gmail.com",
  password: "123456",
  password2: "123456",
  identity: "管理員",
});

// 自定義驗證方法
const validatePass2 = (rule: any, value: string, callback: any) => {
  if (value === "") {
    callback(new Error("請重新輸入密碼"));
  } else if (value !== registerUser.value.password) {
    callback(new Error("兩次密碼不一致"));
  } else {
    callback();
  }
};

// 表單欄位驗證規則
const rules = reactive<RegisterRulesType>({
  name: [
    { required: true, message: "用戶名不得為空", trigger: "change" },
    { min: 2, max: 30, message: "長度必須為2~30字元", trigger: "blur" },
  ],
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
  password2: [
    { min: 6, max: 30, message: "長度必須為6~30字元", trigger: "blur" },
    { validator: validatePass2, trigger: "blur" },
  ],
});

// 測試註冊按鈕
const handleSubmit = () => {
  console.log(registerUser.value);
};
</script>

<template>
  <div class="register">
    <section class="form-container">
      <div class="manage-tip">
        <span class="title">後台管理系統</span>
        <el-form
          :rules="rules"
          :model="registerUser"
          class="register-form"
          label-width="80px"
        >
          <el-form-item label="用戶名" prop="name">
            <el-input
              v-model="registerUser.name"
              placeholder="請輸入用戶名"
            ></el-input>
          </el-form-item>
          <el-form-item label="郵件" prop="email">
            <el-input
              v-model="registerUser.email"
              placeholder="請輸入郵件"
            ></el-input>
          </el-form-item>
          <el-form-item label="密碼" prop="password">
            <el-input
              v-model="registerUser.password"
              placeholder="請輸入密碼"
            ></el-input>
          </el-form-item>
          <el-form-item label="確認密碼" prop="password2">
            <el-input
              v-model="registerUser.password2"
              placeholder="請確認密碼"
            ></el-input>
          </el-form-item>
          <el-form-item label="選擇身分">
            <el-select v-model="registerUser.identity" placeholder="選擇身分">
              <el-option label="管理員" value="manager"></el-option>
              <el-option label="員工" value="employee"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button @click="handleSubmit" class="submit-btn">註冊</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.register {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(./../assets/bg.jpg) no-repeat center center;
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
.register-form {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
.submit-btn {
  width: 100%;
}
</style>
