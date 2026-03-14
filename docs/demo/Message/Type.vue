<template>
  <div>
    <jl-button @click="open('success')">Success</jl-button>
    <jl-button @click="open('info')">Info</jl-button>
    <jl-button @click="open('warning')">Warning</jl-button>
    <jl-button @click="open('danger')">Danger</jl-button>
  </div>
</template>

<script setup lang="ts">
import { JlButton } from "@jinli6386/element";
import { createMessage } from "@jinli6386/element";

const open = (type: any) => {
  createMessage({ message: `这是一个${type}消息提示`, type });
};

defineOptions({
  name: "TypeMessageDemo",
});
</script>

<style scoped></style>

