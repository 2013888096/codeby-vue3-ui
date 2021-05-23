<demo>函数式调用对话框</demo>
<template>
  <h1></h1>
  <Button theme="primary"
          size="small"
          @click="showDialog">一键打开Dialog</Button>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
import { openDialog } from "../../lib/openDialog";

export default {
  name: "DialogDemo1",
  components: {
    Button,
  },
  setup() {
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
      showDialog,
    };
  },
};
</script>