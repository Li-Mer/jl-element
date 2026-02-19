<template>
  <div class="tooltip-base-box">
    <jl-tooltip content="hello tooltip" trigger="click">
      <jl-button> 点击激活 Tooltip </jl-button>
    </jl-tooltip>
  </div>
</template>

<script setup lang="ts">
import JlTooltip from "@/components/Tooltip/Tooltip.vue";
import JlButton from "@/components/Button/Button.vue";

defineOptions({
  name: "TriggerTooltipDemo",
});
</script>

<style scoped></style>
