<template>
  <div>
    <h1>Switch 组件示例</h1>
    <div class="demo">
      <h2>常规用法</h2>
      <div class="demo-component">
        <Switch1Demo />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">

      </div>
    </div>
    <div class="demo">
      <h2>支持 disabled</h2>
      <div class="demo-component">
        <Switch2Demo />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code"></div>
    </div>
    <Switch v-model:value="checked" />
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import Switch from "../lib/Switch.vue";
import Switch1Demo from "../components/Switch1.demo.vue";
import Switch2Demo from "../components/Switch2.demo.vue";
import { ref } from "vue";
export default {
  components: { Switch, Switch1Demo, Switch2Demo, Button },
  setup() {
    const checked = ref(false);
    return {
      checked,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>