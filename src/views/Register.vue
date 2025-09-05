<script setup lang="ts">
import { ref } from "vue";

// 定義響應數據
const registerUser = ref({
  name: "米斯特王",
  email: "willyos0113@gmail.com",
  password: "123456",
  password2: "123456",
  identity: "管理員",
});
</script>

<template>
  <div class="register">
    <section class="form-container">
      <div class="manage-tip">
        <span class="title">後台管理系統</span>
        <el-form
          v-model="registerUser"
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
            <el-button class="submit-btn">註冊</el-button>
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
