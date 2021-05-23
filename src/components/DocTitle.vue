<template>
  <div class="doc-title">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: "DocTitle",
};
</script>

<style lang="scss" scoped>
.doc-title {
  display: block;
  font-size: 30px;
  margin-bottom: 40px;
  box-shadow: 2px 3px 3px rgba(189, 227, 241, 0.3);
}
</style>