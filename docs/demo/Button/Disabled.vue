<template>
  <div class="button-example">
    <div class="button-row">
      <jl-button disabled>Button</jl-button>
      <jl-button type="primary" disabled>Primary</jl-button>
      <jl-button type="danger" disabled>Danger</jl-button>
      <jl-button type="success" disabled>Success</jl-button>
      <jl-button type="warning" disabled>Warning</jl-button>
      <jl-button type="info" disabled>Info</jl-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import JlButton from "@/components/Button/Button.vue";
defineOptions({
  name: "DisabledButtonDemo",
});
</script>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
