<template>
  <doc-title>Button 示例</doc-title>
  <CodePer :component="Button1Demo" />
  <CodePer :component="Button2Demo" />
  <CodePer :component="Button3Demo" />
  <Attr :columns="columns"
        :data="data" />
</template>
<script lang="ts">
import Button1Demo from "../../codeDemo/ButtonCode/Button1Code.vue";
import Button2Demo from "../../codeDemo/ButtonCode/Button2Code.vue";
import Button3Demo from "../../codeDemo/ButtonCode/Button3Code.vue";

import "prismjs";
import "../../assets/style/prism.css";
import CodePer from "../Codeper.vue";
import DocTitle from "../DocTitle.vue";
import Attr from "../Attrs.vue";
import { columns } from "../../lib/data";
import { ref } from "vue";
export default {
  components: {
    CodePer,
    DocTitle,
    Attr,
  },
  setup() {
    const data = ref([
      {
        params: "theme",
        desc: "按钮颜色",
        type: "string",
        select: "primary / warning / success / danger / info / link",
        default: "default",
      },
      {
        params: "size",
        desc: "尺寸大小",
        type: "string",
        select: "small / normal / large",
        default: "normal",
      },
      {
        params: "loading",
        desc: "是否加载",
        type: "boolean",
        select: "false / true",
        default: "false",
      },
    ]);
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      columns,
      data,
    };
  },
};
</script>
<style lang="scss">
</style>