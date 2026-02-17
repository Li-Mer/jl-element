<template>
  <div class="button-example">
    <div class="button-row">
      <Button disabled>Button</Button>
      <Button type="primary" disabled>Primary</Button>
      <Button type="danger" disabled>Danger</Button>
      <Button type="success" disabled>Success</Button>
      <Button type="warning" disabled>Warning</Button>
      <Button type="info" disabled>Info</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/Button/Button.vue";
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
