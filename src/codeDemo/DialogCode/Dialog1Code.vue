<demo>基础用法</demo>
<template>
  <Dialog v-model:visible="visible"
          :closeOnClickOverlay="true"
          :ok="f1"
          :cancel="f2">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <p>第1行</p>
      <p>第2行</p>
    </template>
  </Dialog>
  <Button theme="primary"
          size="small"
          @click="toggle">打开对话框</Button>
</template>
<script lang="ts">
import Dialog from "../../lib/Dialog.vue";
import Button from "../../lib/Button.vue";
import { ref } from "vue";

export default {
  name: "Dialog1Code",
  components: {
    Dialog,
    Button,
  },
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const f1 = () => {
      console.log("确认");
      return false;
    };
    const f2 = () => {
      console.log("取消");
    };
    return {
      visible,
      toggle,
      f1,
      f2,
    };
  },
};
</script>