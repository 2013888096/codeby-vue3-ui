<template>
  <doc-title>Dialog 示例</doc-title>
  <CodePer :component="Dialog1Demo" />
  <CodePer :component="Dialog2Demo" />
  <Attr :columns="columns"
        :data="data" />

</template>
<script lang="ts">
import Dialog1Demo from "../../codeDemo/DialogCode/Dialog1Code.vue";
import Dialog2Demo from "../../codeDemo/DialogCode/Dialog2Code.vue";

import "prismjs";
import "../../assets/style/prism.css";
import CodePer from "../Codeper.vue";
import DocTitle from "../DocTitle.vue";
import Attr from "../Attrs.vue";
import { columns } from "../../lib/data";
import { ref } from "vue";

export default {
  name: "DialogDemo",
  components: { CodePer, DocTitle, Attr },
  setup() {
    const data = ref([
      {
        params: "visible",
        desc: "是否展示",
        type: "boolean",
        select: "true / false",
        default: "normal",
      },
      {
        params: "width",
        desc: "宽度",
        type: "string",
        select: "0%~100%",
        default: "normal",
      },
      {
        params: "top",
        desc: "顶部距离",
        type: "string",
        select: "数字+px",
        default: "normal",
      },
      {
        params: "visible",
        desc: "是否展示",
        type: "boolean",
        select: "true / false",
        default: "normal",
      },
      {
        params: "closeOnClickOverlay",
        desc: "是否点击遮罩层关闭弹出框",
        type: "boolean",
        select: "true / false",
        default: "false",
      },
      {
        params: "ok",
        desc: "确认触发函数",
        type: "function",
        select: "()=>{}",
        default: "--",
      },
      {
        params: "cancel",
        desc: "取消触发函数",
        type: "function",
        select: "()=>{}",
        default: "--",
      },
    ]);

    return { Dialog1Demo, Dialog2Demo, columns, data };
  },
};
</script>