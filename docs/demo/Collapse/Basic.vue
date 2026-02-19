<template>
  <div class="basic block">
    <jl-collapse v-model="openedValue">
      <jl-collapse-item name="a" title="Title A">
        <h1>headline title</h1>
        <div>this is content a aaa</div>
      </jl-collapse-item>
      <jl-collapse-item name="b" title="Title B">
        <div>this is bbbbb test</div>
      </jl-collapse-item>
      <jl-collapse-item name="c" title="Disabled Title" disabled>
        <div>this is cccc test</div>
      </jl-collapse-item>
    </jl-collapse>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import JlCollapse from "@/components/Collapse/Collapse.vue";
import JlCollapseItem from "@/components/Collapse/CollapseItem.vue";

const openedValue = ref(["a"]);
defineOptions({
  name: "BasicCollapseDemo",
});
</script>

<style scoped></style>
