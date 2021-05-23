<template>
  <article class="markdown-body"
           v-html="content">
  </article>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  name: "Markdown",
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const content = ref<string>(null);
    // 动态import(异步加载)-->单独加载
    //猜测动态import 会返回一个promise,然后我们通过then获取返回结果
    // const PathUrl = "../markdown/" + props.path;
    import(props.path).then((result) => {
      content.value = result.default;
    });
    return { content };
  },
};
</script>