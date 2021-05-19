<template>
  <div>
    <CodePer :component="Switch1Demo" />
    <div class="demo">
      <h2>支持 disabled</h2>
      <div class="demo-component">
        <component :is="Switch2Demo" />
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre class="language-html"
             v-html="Prism.highlight(Switch2Demo.__sourceCode,Prism.languages.html,'html')" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
import Switch1Demo from "../../codeDemo/SwitchCode/Switch1Code.vue";
import Switch2Demo from "../../codeDemo/SwitchCode/Switch2Code.vue";
//prismjs 直接导入 会在自动挂到window上
import "prismjs";
import "../../assets/style/prism.css";
import CodePer from "../Codeper.vue";
const Prism = (window as any).Prism;

import { ref } from "vue";
export default {
  components: { Button, CodePer },
  setup() {
    const checked = ref(false);
    return {
      checked,
      Switch1Demo,
      Switch2Demo,
      Prism,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>