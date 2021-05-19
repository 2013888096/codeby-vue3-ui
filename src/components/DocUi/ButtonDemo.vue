<template>
  <div>Button 示例</div>
  <h1>基础用法</h1>
  <div>
    <Button>默认按钮</Button>
    <Button theme="primary">主要按钮</Button>
    <Button theme="warning">警告按钮</Button>
    <Button theme="success">成功按钮</Button>
    <Button theme="danger">危险按钮</Button>
    <Button theme="info">信息按钮</Button>
    <Button theme="link">链接按钮</Button>
  </div>
  <h1>尺寸大小</h1>
  <div>
    <Button size="small">超小按钮</Button>
    <Button size="normal">正常按钮</Button>
    <Button size="large">大型按钮</Button>
  </div>
  <h1>加载效果</h1>
  <div>
    <Button loading>加载中</Button>
  </div>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  components: {
    Button: Button,
  },
  setup() {
    const onClick = () => {
      console.log("hi,小白同学");
    };

    return {
      onClick,
    };
  },
};
</script>