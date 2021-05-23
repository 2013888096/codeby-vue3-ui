<demo>尺寸大小</demo>
<template>
  <div>
    <Button size="small">超小按钮</Button>
    <Button size="normal">正常按钮</Button>
    <Button size="large">大型按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  name: "Button2Code",
  components: {
    Button: Button,
  },
};
</script>