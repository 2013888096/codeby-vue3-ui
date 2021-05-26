<demo>常规用法</demo>
<template>
  <Image-upload :isCompress="isCompress"
                v-model:ImageBase64R="imageBase64Result" />
</template>
<script lang="ts">
import ImageUpload from "../../lib/ImageUpload.vue";
import { ref } from "vue";
export default {
  components: {
    ImageUpload,
  },
  setup() {
    const imageBase64Result = ref("");
    const isCompress = ref(true);
    return {
      isCompress,
      imageBase64Result,
    };
  },
};
</script>