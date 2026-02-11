<template>
  <button
    class="jl-button"
    :class="{
      [`jl-button--${type}`]: type,
      [`jl-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
    }"
    :disabled="disabled"
  >
    <span><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from "./types";
// import { buttonProps } from "./types";

//核心作用：告诉 Vue 这个组件接受哪些 Props（属性），并同时为这些属性提供 TypeScript 类型检查和 IDE 智能提示。
//file:///d%3A/Web/v-element/资料/ButtonProps.png
defineProps<ButtonProps>();
// defineProps(buttonProps);
defineOptions({
  name: "JlButton",
});
</script>

<style scoped></style>
