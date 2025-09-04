<script setup lang="ts"></script>

<template>
  <!-- 當使用者 URL 變更時，查詢 index.ts 中對應的元件並渲染它 -->
  <router-view></router-view>
</template>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
