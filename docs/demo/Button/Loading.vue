<template>
  <div class="button-example">
    <div class="button-row">
      <jl-button type="primary" loading>Primary</jl-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import JlButton from "@/components/Button/Button.vue";
defineOptions({
  name: "LoadingButtonDemo",
});
</script>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
