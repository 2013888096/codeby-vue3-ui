<template>
  <div class="top_nav">
    <div class="logo"
         @click="toggleMenu">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>

</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<boolean>>("xxx"); //get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    console.log("topnav 获取的menuVisible为" + menuVisible.value);

    return {
      toggleMenu,
    };
  },
};
</script>
<style lang="scss" scoped>
$buttonColor: #0864a9;
$textColor: #05538c;
.top_nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  color: $textColor;
  display: flex;
  padding: 14px;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background: #fff;
  box-shadow: 0 5px 5px rgb(51 51 51 / 10%);
  > .logo {
    margin-left: 50px;
    cursor: pointer;
    max-width: 6em;
    margin-right: auto;
    svg {
      width: 38px;
      height: 38px;
    }
  }
  .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      > a {
        color: inherit;
      }
    }
  }
  > .toggleAside {
    display: none;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    svg {
      width: 32px;
      height: 32px;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin-left: auto;
      margin-right: auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>