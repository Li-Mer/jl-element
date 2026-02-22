<template>
  <Transition :name="transitionName" @after-leave="destroyComponent" @enter="updateHeight">
    <div
      class="jl-message"
      v-show="visible"
      :class="{
        [`jl-message--${type}`]: type,
        'is-close': showClose,
      }"
      role="alert"
      ref="messageRef"
      :style="cssStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <div class="jl-message__content">
        <slot>
          <RenderNode :vNode="message" v-if="message" />
        </slot>
      </div>
      <div class="jl-message__close" v-if="showClose">
        <Icon icon="xmark" @click.stop="visible = false" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch, nextTick, getCurrentInstance } from "vue";
import type { MessageProps } from "./types";
import RenderNode from "../Common/RenderVnode";
import Icon from "../Icon/Icon.vue";
import { getLastBottomOffset } from "./method";
import useEventListener from "@/hooks/useEventListener";
const props = withDefaults(defineProps<MessageProps>(), {
  duration: 3000,
  type: "info",
  offset: 20,
  transitionName: "fade-up",
});
const visible = ref(false);
const messageRef = ref<HTMLDivElement>();
//计算偏移高度
const height = ref(0);
//上一个实例的最下面的坐标数字,第一个是0
const lastOffset = computed(() => {
  return getLastBottomOffset(props.id);
});
//当前元素应该使用的top
const topOffset = computed(() => {
  return lastOffset.value + props.offset;
});
//当前元素为下一个元素预留的offset，也就是它最低端的bottom值
const bottomOffset = computed(() => {
  return topOffset.value + height.value;
});
const cssStyle = computed(() => {
  return {
    top: `${topOffset.value}px`,
    zIndex: props.zIndex,
  };
});
let timer: any;
function startTimer() {
  if (props.duration <= 0) {
    return;
  }
  timer = setTimeout(() => {
    visible.value = false;
  }, props.duration);
}
function clearTimer() {
  // 这里需要清除定时器，防止组件销毁后定时器还在执行
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}
onMounted(async () => {
  visible.value = true;
  startTimer();
  //   await nextTick();
  //   height.value = messageRef.value?.getBoundingClientRect().height || 0;
});
function keydown(e: Event) {
  const event = e as KeyboardEvent;
  if (event.code === "Escape") {
    visible.value = false;
  }
}
useEventListener(document, "keydown", keydown);
// watch(visible, (newVal) => {
//   if (!newVal) {
//     props.onDestroy();
//   }
// });
function destroyComponent() {
  props.onDestroy();
}
function updateHeight() {
  height.value = messageRef.value?.getBoundingClientRect().height || 0;
}

defineExpose({
  bottomOffset,
  visible,
});
defineOptions({
  name: "JlMessage",
});
</script>

<style scoped></style>
