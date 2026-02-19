<template>
  <div class="tooltip-base-box">
    <jl-tooltip ref="tooltipRef" content="hello tooltip" manual>
      <jl-button> Tooltip </jl-button>
    </jl-tooltip>
    <br /><br />
    <jl-button type="primary" @click="open"> 点击手动触发显示 </jl-button>
    <jl-button type="danger" @click="close"> 点击手动触发隐藏 </jl-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import JlTooltip from "@/components/Tooltip/Tooltip.vue";
import JlButton from "@/components/Button/Button.vue";

const tooltipRef = ref();
const open = () => {
  tooltipRef.value?.show();
};
const close = () => {
  tooltipRef.value?.hide();
};
defineOptions({
  name: "ManualTooltipDemo",
});
</script>

<style scoped></style>
