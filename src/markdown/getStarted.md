# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中插入以下代码

```
import {Button , Tabs , Switch , Dialog} from "codeby-ui"
```

就可以使用组件库了。

## Vue 单文件组件

代码示例:

```
<template>
  <div>
    <Button>默认按钮</Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button: Button,
  },
  setup() {
    return {
      
    };
  }
};
</script>
```