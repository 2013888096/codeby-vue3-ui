<demo>基础用法</demo>
<template>
  <Tabs v-model:selected="title">
    <Tab title="学习">学习</Tab>
    <Tab title="睡觉">睡觉</Tab>
    <Tab title="吃饭">吃饭</Tab>
  </Tabs>

</template>
<script lang="ts">
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import { ref } from "vue";
export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const title = ref("学习");
    return { title };
  },
};
</script>