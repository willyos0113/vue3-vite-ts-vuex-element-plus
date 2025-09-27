<script setup lang="ts">
import { onMounted } from "vue";
import axios from "../utils/http";

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
  <div class="index">初始化頁面</div>
</template>

<style scoped></style>
