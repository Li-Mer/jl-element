<script setup lang="ts">
import Button from "./components/Button/Button.vue";
import type { ButtonInstance } from "./components/Button/types";
import { ref, onMounted } from "vue";
import Collapse from "./components/Collapse/Collapse.vue";
import CollapseItem from "./components/Collapse/CollapseItem.vue";
import Icon from "./components/Icon/Icon.vue";
const buttonRef = ref<ButtonInstance | null>(null);
const openedValue = ref(["a"]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const size = ref<any>("3x");
onMounted(() => {
  console.log(buttonRef.value?.ref); // 这里可以访问到 Button 组件实例
  setTimeout(() => {
    openedValue.value = ["a", "b"];
    // size.value = "2xl";
    // instance.destory()
    // trigger.value = 'hover'
  }, 2000);
});
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>
  <Icon icon="arrow-up" :size="size" type="danger"></Icon>
  <main>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br /><br />
    <Collapse v-model="openedValue">
      <CollapseItem name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </CollapseItem>
      <CollapseItem name="b" title="Title B">
        <div>this is bbbbb test</div>
      </CollapseItem>
      <CollapseItem name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </CollapseItem>
    </Collapse>
    {{ openedValue }}
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
