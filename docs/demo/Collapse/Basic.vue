<template>
  <div class="basic block">
    <jl-collapse v-model="openedValue">
      <jl-collapse-item name="a" title="Consistency">
        <h1>headline title</h1>
        <div>
          Consistent with real life: in line with the process and logic of real life, and comply
          with languages and habits that the users are used to; Consistent within interface: all
          elements should be consistent, such as: design style, icons and texts, position of
          elements, etc.
        </div>
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
import { JlCollapse } from "@jinli6386/element";
import { JlCollapseItem } from "@jinli6386/element";

const openedValue = ref(["a"]);
defineOptions({
  name: "BasicCollapseDemo",
});
</script>

<style scoped></style>

