<template>
  <div class="jl-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from "vue";
import type { NameType, CollapseEmits, CollapseProps } from "./types";
import { collapseContextKey } from "./types";
// import Icon from "../Icon/Icon.vue";
defineOptions({
  name: "JlCollapse",
});
const props = defineProps<CollapseProps>();
const emits = defineEmits<CollapseEmits>();
//这里的activeNames表示激活的项
//handleItemClick函数用于处理项的点击事件，更新activeNames数组，展开和收起对应的项
const activeNames = ref<NameType[]>(props.modelValue ? props.modelValue : []);
watch(
  () => props.modelValue,
  (newVal) => {
    activeNames.value = newVal ? newVal : [];
  },
);
if (props.accordion && activeNames.value.length > 1) {
  console.warn("Accordion mode only allows one active item.");
}
const handleItemClick = (item: NameType) => {
  if (props.accordion) {
    activeNames.value = activeNames.value[0] === item ? [] : [item];
  } else {
    const index = activeNames.value.indexOf(item);
    if (index > -1) {
      activeNames.value.splice(index, 1);
    } else {
      activeNames.value.push(item);
    }
  }
  emits("update:modelValue", activeNames.value);
  emits("change", activeNames.value);
};
provide(collapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>

<style scoped></style>
