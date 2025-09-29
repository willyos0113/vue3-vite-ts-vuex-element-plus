<script setup lang="ts">
import { onMounted } from "vue";
import axios from "../utils/http";
import Navbar from "../components/Navbar.vue";

onMounted(async () => {
  try {
    const { data } = await axios.get("/api/users/current");
    console.log(data);
  } catch (e) {
    console.log(e);
  }
});
</script>

<template>
  <div class="home">
    <navbar />
    <router-view></router-view>
    初始化頁面
  </div>
</template>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
