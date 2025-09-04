<script setup lang="ts"></script>

<template>
  <div class="register">
    <section class="form-container">
      <div class="manage-tip">
        <span class="title">後台管理系統</span>
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
</style>
