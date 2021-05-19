<template>
  <div>Tabs 示例</div>
  <h1>示例1</h1>
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
  setup(props, context) {
    const title = ref("学习");
    return { title };
  },
};
</script>