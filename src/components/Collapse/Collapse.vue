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
  let _activeNames = [...activeNames.value];
  if (props.accordion) {
    _activeNames = [activeNames.value[0] === item ? "" : item].filter((n) => n) as NameType[];
    if (activeNames.value[0] === item) {
      _activeNames = [];
    } else {
      _activeNames = [item];
    }
  } else {
    const index = _activeNames.indexOf(item);
    if (index > -1) {
      _activeNames.splice(index, 1);
    } else {
      _activeNames.push(item);
    }
  }
  activeNames.value = _activeNames;
  emits("update:modelValue", _activeNames);
  emits("change", _activeNames);
};
provide(collapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>

<style scoped></style>
