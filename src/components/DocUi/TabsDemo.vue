<template>
  <doc-title>Tabs 标签栏示例</doc-title>
  <CodePer :component="TabsDemo" />
  <Attr :columns="columns"
        :data="data" />
</template>
<script lang="ts">
import TabsDemo from "../../codeDemo/TabsCode/TabsCode.vue";

import "prismjs";
import "../../assets/style/prism.css";
import CodePer from "../Codeper.vue";
import DocTitle from "../DocTitle.vue";
import Attr from "../Attrs.vue";
import { ref } from "vue";
import { columns } from "../../lib/data";
export default {
  name: "TabsDemo",
  components: { CodePer, DocTitle, Attr },
  setup() {
    const data = ref([
      {
        params: "tab-item",
        desc: "tab页签",
        type: "component",
        select: "tab-item",
        default: "--",
      },
    ]);
    return { TabsDemo, data, columns };
  },
};
</script>