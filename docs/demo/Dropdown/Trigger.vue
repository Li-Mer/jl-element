<template>
  <div class="basic block">
    <jl-dropdown placement="bottom" :menu-options="options" trigger="click">
      <jl-button type="primary"> Click 下拉菜单 </jl-button>
    </jl-dropdown>
  </div>
</template>
<script setup lang="ts">
import { h } from "vue";
import JlDropdown from "@/components/Dropdown/Dropdown.vue";
import JlButton from "@/components/Button/Button.vue";
const options = [
  { key: 1, label: h("b", "this is bold") },
  { key: 2, label: "item2", disabled: true },
  { key: 3, label: "item3", divided: true },
  { key: 4, label: "item4" },
];

defineOptions({
  name: "TriggerDropdownDemo",
});
</script>

<style></style>
