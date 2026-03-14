<template>
  <div class="tooltip-base-box">
    <jl-tooltip>
      <template #content>
        <div>
          <p>这是一个复杂文本内容的 Tooltip</p>
          <ul>
            <li>第一行内容</li>
            <li>第二行内容</li>
          </ul>
        </div>
      </template>
      <jl-button> 复杂文本内容的Tooltip </jl-button>
    </jl-tooltip>
  </div>
</template>

<script setup lang="ts">
import { JlTooltip } from "@jinli6386/element";
import { JlButton } from "@jinli6386/element";

defineOptions({
  name: "ContentTooltipDemo",
});
</script>

<style scoped></style>

