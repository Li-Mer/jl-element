<template>
  <ElementPlusContainer
    :title="props.title"
    :description="props.description"
    :code="props.code"
    :showCode="props.showCode"
  >
    <slot></slot>
  </ElementPlusContainer>
</template>

<script setup lang="ts">
import { ElementPlusContainer } from "@vitepress-demo-preview/component";

interface DemoPreviewProps {
  title?: string;
  description?: string;
  code?: string;
  showCode?: string;
  suffixName?: string;
  absolutePath?: string;
  relativePath?: string;
}

const props = defineProps<DemoPreviewProps>();
</script>
