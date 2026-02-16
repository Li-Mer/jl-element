<template>
  <div class="jl-tooltip" v-on="outEvents" ref="popperContainerNode">
    <div class="jl-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <div class="jl-tooltip__popper" ref="popperNode" v-if="isOpen">
      <slot name="content">{{ content }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import type { TooltipProps, TooltipEmits } from "./types";
import type { Instance } from "@popperjs/core";
import { createPopper } from "@popperjs/core";
import useClickOutside from "@/hooks/useClickOutside";
const props = withDefaults(defineProps<TooltipProps>(), {
  trigger: "hover",
  placement: "bottom",
});
const emits = defineEmits<TooltipEmits>();

const isOpen = ref(false);
const popperNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();
const popperContainerNode = ref<HTMLElement>();
let popperInstance: Instance | null = null;
const events: Record<string, () => void> = reactive({});
const outEvents: Record<string, () => void> = reactive({});
const open = () => {
  isOpen.value = true;
  emits("visible-change", true);
};
const close = () => {
  isOpen.value = false;
  emits("visible-change", false);
};
const togglePopper = () => {
  isOpen.value = !isOpen.value;
  emits("visible-change", isOpen.value);
};
// @ts-expect-error: Type assertion to satisfy useClickOutside
useClickOutside(popperContainerNode as unknown as Ref<HTMLElement>, () => {
  if (isOpen.value && props.trigger === "click") {
    close();
  }
});
const attachEvents = () => {
  if (props.trigger === "hover") {
    events["mouseenter"] = open;
    outEvents["mouseleave"] = close;
  } else if (props.trigger === "click") {
    events["click"] = togglePopper;
  }
};
attachEvents();
//当父组件动态修改 trigger（例如从 "hover" 变为 "click"）时，这段代码执行以下操作：清空旧事件、重新绑定事件
watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      // 修正：不要直接赋值空对象，而是清空属性，维持响应性引用
      for (const key in events) {
        delete events[key];
      }
      for (const key in outEvents) {
        delete outEvents[key];
      }
      attachEvents();
    }
  },
);
watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, {
          placement: props.placement,
        });
      }
    } else {
      popperInstance?.destroy();
    }
  },
  {
    flush: "post",
    /**
     * 这里使用了 flush: "post"，确保在 DOM 更新后才执行副作用函数，以避免在组件初始渲染时访问到未定义的 DOM 元素。
      这样可以确保 popperInstance 在正确的时机被创建和销毁，避免潜在的错误。
      flush: 'pre'（默认）—— 异步、DOM 更新前执行
      flush: 'sync' —— 同步、数据变化立即执行：放弃异步批量优化，数据每变化一次，回调就立即同步执行一次，执行后立刻触发 DOM 更新。
     */
  },
);

defineOptions({
  name: "JlTooltip",
});
</script>

<style scoped></style>
