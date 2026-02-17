<script setup lang="ts">
import Button from "./components/Button/Button.vue";
import type { ButtonInstance } from "./components/Button/types";
import { ref, onMounted, h } from "vue";
import Collapse from "./components/Collapse/Collapse.vue";
import CollapseItem from "./components/Collapse/CollapseItem.vue";
import Icon from "./components/Icon/Icon.vue";
import { createPopper } from "@popperjs/core";
import type { Instance } from "@popperjs/core";
import Tooltip from "./components/Tooltip/Tooltip.vue";
import type { TooltipInstance } from "./components/Tooltip/types";
import type { Options } from "@popperjs/core";
import Dropdown from "./components/Dropdown/Dropdown.vue";
import type { MenuOption } from "./components/Dropdown/types";
const buttonRef = ref<ButtonInstance | null>(null);
const openedValue = ref(["a"]);
const size = ref<any>("3x");

//Tooltip
const overlayNode = ref<HTMLElement>();
const triggerNode = ref<HTMLElement>();
let popperInstance: Instance | null = null;
const trigger = ref<any>("hover");
const tooltipRef = ref<TooltipInstance | null>(null);
// const options: Partial<Options> = {
//   placement: "right-end",
//   strategy: "fixed",
// };
const open = () => {
  tooltipRef.value?.show();
};
const close = () => {
  tooltipRef.value?.hide();
};

//Dropdown
const options: MenuOption[] = [
  { key: "1", label: h("b", "this is bold") },
  { key: "2", label: "item2", disabled: true },
  { key: "3", label: "item3", divided: true },
  { key: "4", label: "item4" },
];
const inlineConsole = (...args: any) => {
  console.log(...args);
};
onMounted(() => {
  console.log(buttonRef.value?.ref); // 这里可以访问到 Button 组件实例

  if (overlayNode.value && triggerNode.value) {
    popperInstance = createPopper(triggerNode.value, overlayNode.value, {
      placement: "right",
    });
  }

  setTimeout(() => {
    openedValue.value = ["a", "b"];
    // popperInstance?.setOptions({
    //   placement: "top",
    // });
    // size.value = "2xl";
    // instance.destroy()
    // trigger.value = "hover";
  }, 2000);
});
</script>

<template>
  <header>
    <Dropdown
      content="This is a tooltip"
      :trigger="trigger"
      ref="tooltipRef"
      :menu-options="options"
      @visible-change="(e) => inlineConsole('visible-change', e)"
      @select="(e) => inlineConsole('select', e)"
      manual
    >
      <img
        alt="Vue logo"
        class="logo"
        src="./assets/logo.svg"
        width="125"
        height="125"
        ref="triggerNode"
      />
      <template #content>
        <h1>Hello Tooltip</h1>
      </template>
    </Dropdown>
    <!-- <div ref="overlayNode">
      <h1>Hello Tooltip</h1>
    </div> -->
  </header>
  <Icon icon="arrow-up" :size="size" type="danger"></Icon>
  <main>
    <Button @click="open">Open Tooltip</Button>
    <Button @click="close">Close Tooltip</Button>
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
