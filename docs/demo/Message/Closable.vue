<template>
  <div>
    <jl-button @click="showMessage">可关闭的消息</jl-button>
  </div>
</template>

<script setup lang="ts">
import { JlButton } from "@jinli6386/element";
import { createMessage } from "@jinli6386/element";

const showMessage = () => {
  createMessage({ message: "这是一个可关闭的消息提示", showClose: true, duration: 0 });
};

defineOptions({
  name: "ClosableMessageDemo",
});
</script>

<style scoped></style>

