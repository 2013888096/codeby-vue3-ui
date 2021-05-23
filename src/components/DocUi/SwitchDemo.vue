<template>
  <div>
    <doc-title>Switch 开关示例</doc-title>
    <CodePer :component="Switch1Demo" />
    <CodePer :component="Switch2Demo" />
    <Attr :columns="columns"
          :data="data" />
  </div>
</template>
<script lang="ts">
import Switch1Demo from "../../codeDemo/SwitchCode/Switch1Code.vue";
import Switch2Demo from "../../codeDemo/SwitchCode/Switch2Code.vue";
//prismjs 直接导入 会在自动挂到window上
import "prismjs";
import "../../assets/style/prism.css";
import CodePer from "../Codeper.vue";
import DocTitle from "../DocTitle.vue";
import Attr from "../Attrs.vue";
import { columns } from "../../lib/data";
const Prism = (window as any).Prism;

import { ref } from "vue";
export default {
  components: { DocTitle, CodePer, Attr },
  setup() {
    const data = ref([
      {
        params: "value",
        desc: "是否选中",
        type: "boolean",
        select: "false / true",
        default: "false",
      },
    ]);
    return {
      data,
      columns,
      Switch1Demo,
      Switch2Demo,
      Prism,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>