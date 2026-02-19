<template>
  <div class="jl-tooltip" ref="popperContainerNode">
    <div class="jl-tooltip__trigger" ref="triggerNode" v-on="events">
      <slot></slot>
    </div>
    <transition :name="props.transition">
      <div class="jl-tooltip__popper" ref="popperNode" v-if="isOpen" v-on="popperEvents">
        <slot name="content">{{ content }}</slot>
        <div id="arrow" data-popper-arrow></div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch, onUnmounted, computed } from "vue";
import type { TooltipProps, TooltipEmits, TooltipInstance } from "./types";
import type { Instance } from "@popperjs/core";
import { createPopper } from "@popperjs/core";
import useClickOutside from "../../hooks/useClickOutside";
import { debounce } from "lodash-es";
const props = withDefaults(defineProps<TooltipProps>(), {
  trigger: "hover",
  placement: "bottom",
  transition: "fade",
  openDelay: 100,
  closeDelay: 100,
});
const emits = defineEmits<TooltipEmits>();
const isOpen = ref(false);
const popperNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();
const popperContainerNode = ref<HTMLElement>();
let popperInstance: null | Instance = null;
const events: Record<string, any> = reactive({});
const popperEvents: Record<string, any> = reactive({});
let openTimes = 0;
let closeTimes = 0;
const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 9],
        },
      },
    ],
    ...props.popperOptions,
  };
});

const open = () => {
  openTimes++;
  console.log("open times", openTimes);
  isOpen.value = true;
  emits("visible-change", true);
};
const close = () => {
  closeTimes++;
  console.log("close times", closeTimes);
  isOpen.value = false;
  emits("visible-change", false);
};
const openDebounce = debounce(open, props.openDelay);
const closeDebounce = debounce(close, props.closeDelay);

const openFinal = () => {
  closeDebounce.cancel();
  openDebounce();
};
const closeFinal = () => {
  openDebounce.cancel();
  closeDebounce();
};

const togglePopper = () => {
  if (isOpen.value) {
    closeFinal();
  } else {
    openFinal();
  }
};
// @ts-expect-error: Type assertion to satisfy useClickOutside
useClickOutside(popperContainerNode, () => {
  if (props.trigger === "click" && isOpen.value && !props.manual) {
    closeFinal();
  }
  if (isOpen.value) {
    emits("click-outside", true);
  }
});

const clearEventMap = (eventMap: Record<string, any>) => {
  Object.keys(eventMap).forEach((key) => {
    delete eventMap[key];
  });
};

const clearEvents = () => {
  clearEventMap(events);
  clearEventMap(popperEvents);
};

const attachEvents = () => {
  clearEvents();
  if (props.trigger === "hover") {
    events["mouseenter"] = openFinal;
    events["mouseleave"] = closeFinal;
    popperEvents["mouseenter"] = openFinal;
    popperEvents["mouseleave"] = closeFinal;
  } else if (props.trigger === "click") {
    events["click"] = togglePopper;
  }
};
if (!props.manual) {
  attachEvents();
}
watch(
  () => props.manual,
  (isManual) => {
    if (isManual) {
      clearEvents();
    } else {
      attachEvents();
    }
  },
);
watch(
  () => props.trigger,
  (newTrigger, oldTrigger) => {
    if (newTrigger !== oldTrigger) {
      attachEvents();
    }
  },
);
watch(
  isOpen,
  (newValue) => {
    if (newValue) {
      if (triggerNode.value && popperNode.value) {
        popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value);
      } else {
        popperInstance?.destroy();
      }
    }
  },
  { flush: "post" },
);

onUnmounted(() => {
  popperInstance?.destroy();
});
defineExpose<TooltipInstance>({
  show: openFinal,
  hide: closeFinal,
});
defineOptions({
  name: "JlTooltip",
});
</script>

<style scoped></style>
