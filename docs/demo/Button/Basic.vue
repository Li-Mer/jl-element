<template>
  <Button>hello</Button>
  <Button type="primary">Primary</Button>
  <Button type="danger">Danger</Button>
  <Button loading>Loading</Button>
</template>

<script setup lang="ts">
import Button from "@/components/Button/Button.vue";

defineOptions({
  name: "BasicButtonDemo",
});
</script>

<style scoped></style>
