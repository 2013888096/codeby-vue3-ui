<template>
  <div>Dialog 示例
  </div>
  <h1>基础用法</h1>
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
  <h1>函数式调用对话框</h1>
  <Button theme="primary"
          size="small"
          @click="showDialog">一键打开Dialog</Button>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { ref } from "vue";

export default {
  name: "DialogDemo1",
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
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "小白同学",
        visible: true,
        closeOnClickOverlay: true,
        ok: () => {
          console.log("确认");
          return false;
        },
        cancel: () => {
          console.log("取消");
        },
      });
    };
    return {
      visible,
      toggle,
      f1,
      f2,
      showDialog,
    };
  },
};
</script>