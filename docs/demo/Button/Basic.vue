<template>
  <div class="button-example">
    <div class="button-row">
      <jl-button>Button</jl-button>
      <jl-button type="primary">Primary</jl-button>
      <jl-button type="danger">Danger</jl-button>
      <jl-button type="success">Success</jl-button>
      <jl-button type="warning">Warning</jl-button>
      <jl-button type="info">Info</jl-button>
    </div>
    <div class="button-row">
      <jl-button plain>Plain</jl-button>
      <jl-button type="primary" plain>Primary</jl-button>
      <jl-button type="danger" plain>Danger</jl-button>
      <jl-button type="success" plain>Success</jl-button>
      <jl-button type="warning" plain>Warning</jl-button>
      <jl-button type="info" plain>Info</jl-button>
    </div>
    <div class="button-row">
      <jl-button round>Round</jl-button>
      <jl-button type="primary" round>Primary</jl-button>
      <jl-button type="danger" round>Danger</jl-button>
      <jl-button type="success" round>Success</jl-button>
      <jl-button type="warning" round>Warning</jl-button>
      <jl-button type="info" round>Info</jl-button>
    </div>
    <div class="button-row">
      <jl-button icon="question" circle></jl-button>
      <jl-button type="primary" icon="backward" circle></jl-button>
      <jl-button type="danger" icon="star" circle></jl-button>
      <jl-button type="success" icon="ban" circle></jl-button>
      <jl-button type="warning" icon="at" circle></jl-button>
      <jl-button type="info" icon="b" circle></jl-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import JlButton from "@/components/Button/Button.vue";

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
