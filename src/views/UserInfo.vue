<script setup lang="ts">
import { useAuthStore } from "../store";

// 取得 store 實例
const store: any = useAuthStore();
</script>

<template>
  <div class="info-container">
    <el-row type="flex" class="content" justify="center">
      <el-col :span="8">
        <div class="user">
          <img src="../assets/default.jpg" class="avatar" alt="avatar" />
        </div>
      </el-col>
      <el-col :span="16">
        <div class="userinfo">
          <div class="user-item">
            <i class="fa fa-user"></i>
            <span>{{ store.user?.name }}</span>
          </div>
          <div class="user-item">
            <i class="fa fa-cog"></i>
            <span>{{ store.user?.identity }}</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.info-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  /* padding: 16px; */
}
.content {
  width: 100%;
  height: 100%;
}
.user {
  text-align: center;
  position: relative;
  top: 30%;
}
.user img {
  width: 150px;
  border-radius: 50%;
}
.user span {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}
.userinfo {
  height: 100%;
  background-color: #eee;
}
.user-item {
  position: relative;
  top: 30%;
  padding: 26px;
  font-size: 28px;
  color: #333;
}
</style>
