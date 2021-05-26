<template>
  <div>
    <doc-title>ImageUpload 示例</doc-title>
    <CodePer :component="ImageUpload" />
    <Attr :columns="columns"
          :data="data" />
  </div>
</template>
<script lang="ts">
import ImageUpload from "../../codeDemo/ImageUploadCode/ImageUploadCode.vue";
//prismjs 直接导入 会在自动挂到window上
import "prismjs";
import "../../assets/style/prism.css";
import CodePer from "../Codeper.vue";
import DocTitle from "../DocTitle.vue";
import Attr from "../Attrs.vue";
import { columns } from "../../lib/data";
const Prism = (window as any).Prism;

import { ref } from "vue";
export default {
  components: { DocTitle, CodePer, Attr },
  setup() {
    const data = ref([
      {
        params: "isCompress",
        desc: "是否压缩",
        type: "boolean",
        select: "true / false",
        default: "true",
      },
      {
        params: "imageBase64Result",
        desc: "处理后的图片base64编码",
        type: "string",
        select: "null",
        default: "normal",
      },
      ,
      {
        params: "maxsize_str",
        desc: "允许上传最大限制",
        type: "string",
        select: "1MB",
        default: "1MB",
      },
    ]);
    return {
      data,
      columns,
      ImageUpload,
      Prism,
    };
  },
};
</script>
<style lang="scss" scoped>
</style>