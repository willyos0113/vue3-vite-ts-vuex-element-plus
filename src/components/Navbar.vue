<template>
  <nav class="nav">
    <el-row>
      <el-col :span="12" class="logo-container">
        <img src="../assets/logo.png" alt="logo" class="logo" />
        <span class="title">後台管理系統</span>
      </el-col>
      <el-col :span="12" class="user-info">
        <img src="../assets/default.jpg" class="avatar" alt="avatar" />
        <div class="welcome-content">
          <p class="content welcome">歡迎</p>
          <p class="content username">Mr.王</p>
        </div>
        <!-- 下拉選單 ( <el-dropdown> ) -->
        <span class="dropdown">
          <el-dropdown type="primary" @click="handleDropDown">
            <!-- (1) 觸擊點 -->
            <span class="el-dropdown-link">
              <el-icon><ArrowDown /></el-icon>
            </span>
            <!-- (2) 下拉選單內容 -->
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>個人資訊</el-dropdown-item>
                <el-dropdown-item>登出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </span>
      </el-col>
    </el-row>
  </nav>
</template>

<script setup lang="ts">
import { ArrowDown } from "@element-plus/icons-vue";

const handleDropDown = () => {
  console.log("點擊下拉選單");
};
</script>

<style scoped>
/* Navbar 容器 */
.nav {
  width: 100%;
  height: 60px;
  min-width: 600px;
  padding: 5px;
  background-color: #074c62;
  color: #fff;
  border-bottom: 1px solid #1f2d3d;
}

/* Navbar 容器左側 flex 佈局 */
.logo-container {
  line-height: 60px;
  min-width: 400px;
}
.logo {
  height: 50px;
  width: 50px;
  margin-right: 5px;
  vertical-align: middle;
  display: inline-block;
}
.title {
  font-size: 22px;
  font-family: "Courier New", Courier, monospace;
  vertical-align: middle;
  letter-spacing: 3px;
}

/* Navbar 容器右側 flex 佈局 */
.user-info {
  line-height: 60px;
  text-align: right;
  padding-right: 10px;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
  display: inline-block;
}
.welcome-content {
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: 0 5px;
}
.content {
  line-height: 20px;
  text-align: center;
  font-size: 14px;
}
.welcome {
  font-size: 12px;
}
.username {
  color: #409eff;
  font-weight: bolder;
}
.dropdown {
  cursor: pointer;
  margin-right: 5px;
}
.el-dropdown {
  color: #fff;
}

.dropdown i {
  margin-top: 20px;
}
</style>
