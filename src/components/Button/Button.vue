<template>
  <button
    ref="_ref"
    class="jl-button"
    :class="{
      [`jl-button--${type}`]: type,
      [`jl-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <Icon icon="spinner" spin v-if="loading"></Icon>
    <Icon :icon="icon" v-if="icon"></Icon>
    <span><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from "./types";
import { ref } from "vue";
import Icon from "../Icon/Icon.vue";

defineOptions({
  name: "JlButton",
});

//核心作用：告诉 Vue 这个组件接受哪些 Props（属性），并同时为这些属性提供 TypeScript 类型检查和 IDE 智能提示。
//file:///d%3A/Web/v-element/资料/ButtonProps.png

//withDefaults 是一个编译宏，用于在使用 TypeScript 类型声明 props 时提供默认值。
//当你使用 defineProps<Props>() 这种基于类型的声明方式时，你无法直接在类型定义中指定默认值（因为接口只是类型约束）。withDefaults 解决了这个问题，它允许你为某些属性指定默认值。如果父组件没有传递 nativeType 属性，那么它将自动取值为 "button"。
withDefaults(defineProps<ButtonProps>(), {
  nativeType: "button",
});

const _ref = ref<HTMLButtonElement>();

defineExpose({
  ref: _ref,
});
</script>

<style></style>
