<template>
  <div class="basic block">
    <jl-dropdown
      placement="bottom"
      :menu-options="options"
      trigger="click"
      manual
      ref="dropdownRef"
    >
      <jl-button> 菜单容器 </jl-button>
    </jl-dropdown>
    <br /><br />
    <jl-button type="primary" @click="open"> 显示 </jl-button>
    <jl-button type="danger" @click="close"> 隐藏 </jl-button>
  </div>
</template>
<script setup lang="ts">
import { h, ref } from "vue";
import JlDropdown from "@/components/Dropdown/Dropdown.vue";
import JlButton from "@/components/Button/Button.vue";
const options = [
  { key: 1, label: h("b", "this is bold") },
  { key: 2, label: "item2", disabled: true },
  { key: 3, label: "item3", divided: true },
  { key: 4, label: "item4" },
];
const dropdownRef = ref();
const open = () => {
  dropdownRef.value?.show();
};
const close = () => {
  dropdownRef.value?.hide();
};
defineOptions({
  name: "ManualDropdownDemo",
});
</script>

<style></style>
