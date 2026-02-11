<script setup lang="ts">
import Button from "./components/Button/Button.vue";
import type { ButtonInstance } from "./components/Button/types";
import { ref, onMounted } from "vue";
const buttonRef = ref<ButtonInstance | null>(null);

onMounted(() => {
  console.log(buttonRef.value.ref); // 这里可以访问到 Button 组件实例
});
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <Button type="primary" size="large" disabled ref="buttonRef">Primary Large</Button>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
