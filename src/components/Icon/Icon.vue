<template>
  <i
    class="jl-icon"
    :class="{
      [`jl-icon--${type}`]: type,
    }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filteredProps"></font-awesome-icon>
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { omit } from "lodash-es";
import type { IconProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//file:///D:\Web\jl-element\资料\inheritAttrs.png
defineOptions({
  name: "JlIcon",
  inheritAttrs: false,
});
const props = defineProps<IconProps>();
const filteredProps = computed(() => omit(props, ["type", "color"]));
const customStyles = computed(() => {
  return props.color ? { color: props.color } : {};
});
</script>

<style scoped></style>
