<template>
  <div
    class="jl-collapse-item"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <div
      class="jl-collapse-item__header"
      :class="{
        'is-disabled': disabled,
        'is-active': isActive,
      }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <Icon icon="angle-right" class="header-angle"></Icon>
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="jl-collapse-item__wrapper" v-show="isActive">
        <div class="jl-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from "./types";
import { inject, computed } from "vue";
import { collapseContextKey } from "./types";
import Icon from "../Icon/Icon.vue";
const props = defineProps<CollapseItemProps>();
defineOptions({
  name: "JlCollapseItem",
});
const collapseContext = inject(collapseContextKey);
const isActive = computed(() => {
  return collapseContext?.activeNames.value.includes(props.name);
});
const handleClick = () => {
  if (props.disabled) return;
  collapseContext?.handleItemClick(props.name);
};
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = "0px";
    el.style.overflow = "hidden";
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`;
  },
  afterEnter(el) {
    el.style.height = "";
    el.style.overflow = "";
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = "hidden";
  },
  leave(el) {
    el.style.height = "0px";
  },
  afterLeave(el) {
    el.style.height = "";
    el.style.overflow = "";
  },
};
</script>

<style scoped></style>
