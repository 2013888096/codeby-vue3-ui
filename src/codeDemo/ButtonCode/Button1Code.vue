<demo>基础用法</demo>
<template>
  <div>
    <Button>默认按钮</Button>

    <Button theme="primary">主要按钮</Button>

    <Button theme="warning">警告按钮</Button>

    <Button theme="success">成功按钮</Button>

    <Button theme="danger">危险按钮</Button>

    <Button theme="info">信息按钮</Button>

    <Button theme="link">链接按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  name: "Button1Code",
  components: {
    Button: Button,
  },
};
</script>