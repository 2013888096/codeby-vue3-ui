<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="c-dialog-overlay"
           @click="onClickOverlay">
        <div class="c-dialog-wrapper"
             :style="styles">
          <div class="c-dialog">
            <header>
              <slot name="title" />
              <span class="c-dialog-close"
                    @click="close"></span>
            </header>
            <main>
              <slot name="content" />
            </main>
            <footer>
              <Button theme="primary"
                      size="small"
                      @click="ok">OK</Button>
              <Button size="small"
                      @click="cancel">Cancel</Button>
            </footer>
          </div>
        </div>
      </div>
    </Teleport>
  </template>

</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  name: "Dialog",
  components: { Button },
  props: {
    width: {
      type: String,
      default: "60%",
    },
    top: {
      type: String,
      default: "130px",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: false,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const styles = {
      minWidth: props.width,
      top: props.top,
    };
    const close = () => {
      context.emit("update:visible", !props.visible);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      //如果ok返回值存在则执行 并且 return返回值不能为false
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    const cancel = () => {
      props.cancel && props.cancel();
      close();
    };

    return {
      styles,
      close,
      onClickOverlay,
      ok,
      cancel,
    };
  },
};
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.c-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out(black, 0.5);

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade-out(black, 0.5);
    z-index: 30;
  }

  &-wrapper {
    min-width: 60%;
    position: fixed;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    z-index: 31;
  }

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>