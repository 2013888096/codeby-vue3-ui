<template>
  <router-view />
</template>

<script lang="ts">
import { ref, provide } from "vue";
import { router } from "./router";
export default {
  name: "App",
  setup() {
    //   通过获取页面宽度来决定  menuVisible 初始化为true 还是false
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);

    provide("menuVisible", menuVisible); // set

    // 路由切换时
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
};
</script>
