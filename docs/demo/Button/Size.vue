<template>
  <div class="button-example">
    <div class="button-row">
      <jl-button type="primary" size="small">small</jl-button>
      <jl-button type="success">默认</jl-button>
      <jl-button type="danger" size="large">Large</jl-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import JlButton from "@/components/Button/Button.vue";
defineOptions({
  name: "SizeButtonDemo",
});
</script>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
