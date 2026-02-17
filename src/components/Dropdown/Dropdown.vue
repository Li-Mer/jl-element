<template>
  <div class="jl-dropdown">
    <Tooltip
      :trigger="trigger"
      :placement="placement"
      :popper-options="popperOptions"
      :open-delay="openDelay"
      :close-delay="closeDelay"
      :manual="manual"
      @visible-change="visibleChange"
      ref="tooltipRef"
    >
      <slot></slot>
      <template #content>
        <ul class="jl-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li class="divided-placeholder" role="separator" v-if="item.divided"></li>
            <li
              class="jl-dropdown__item"
              :class="{ 'is-disabled': item.disabled, 'is-divided': item.divided }"
              :id="`dropdown-item-${item.key}`"
              @click="($event) => itemClick(item)"
            >
              <RenderNode :vNode="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </Tooltip>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import type { DropdownProps, DropdownEmits, DropdownInstance, MenuOption } from "./types";
import Tooltip from "../Tooltip/Tooltip.vue";
import type { TooltipInstance } from "../Tooltip/types";
import RenderNode from "../Common/RenderVnode";
const props = withDefaults(defineProps<DropdownProps>(), {
  hideAfterClick: true,
});
const emits = defineEmits<DropdownEmits>();
const tooltipRef = ref() as Ref<TooltipInstance>;
const visibleChange = (e: boolean): void => {
  emits("visible-change", e);
};
const itemClick = (e: MenuOption) => {
  if (e.disabled) return;
  emits("select", e);
  if (props.hideAfterClick) {
    tooltipRef.value?.hide();
  }
};

defineExpose<DropdownInstance>({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide(),
});
defineOptions({
  name: "JlDropdown",
});
</script>

<style scoped></style>
