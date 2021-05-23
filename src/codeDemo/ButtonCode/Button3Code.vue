<demo>加载效果</demo>
<template>
  <div>
    <Button loading>加载中</Button>
  </div>
</template>
<script lang="ts">
import Button from "../../lib/Button.vue";
export default {
  name: "Button3Code",
  components: {
    Button: Button,
  },
};
</script>