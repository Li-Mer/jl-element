<template>
  <div class="button-example">
    <div class="button-row">
      <Button>Button</Button>
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="info">Info</Button>
    </div>
    <div class="button-row">
      <Button plain>Plain</Button>
      <Button type="primary" plain>Primary</Button>
      <Button type="danger" plain>Danger</Button>
      <Button type="success" plain>Success</Button>
      <Button type="warning" plain>Warning</Button>
      <Button type="info" plain>Info</Button>
    </div>
    <div class="button-row">
      <Button round>Round</Button>
      <Button type="primary" round>Primary</Button>
      <Button type="danger" round>Danger</Button>
      <Button type="success" round>Success</Button>
      <Button type="warning" round>Warning</Button>
      <Button type="info" round>Info</Button>
    </div>
    <div class="button-row">
      <Button icon="question" circle></Button>
      <Button type="primary" icon="backward" circle></Button>
      <Button type="danger" icon="question" circle></Button>
      <Button type="success" icon="question" circle></Button>
      <Button type="warning" icon="question" circle></Button>
      <Button type="info" icon="question" circle></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "../../../components/Button/Button.vue";

defineOptions({
  name: "BasicButtonDemo",
});
</script>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
