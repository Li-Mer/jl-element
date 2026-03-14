<template>
  <div class="tooltip-base-box">
    <jl-tooltip content="hello tooltip" trigger="click">
      <jl-button> 点击激活 Tooltip </jl-button>
    </jl-tooltip>
  </div>
</template>

<script setup lang="ts">
import { JlTooltip } from "@jinli6386/element";
import { JlButton } from "@jinli6386/element";

defineOptions({
  name: "TriggerTooltipDemo",
});
</script>

<style scoped></style>

