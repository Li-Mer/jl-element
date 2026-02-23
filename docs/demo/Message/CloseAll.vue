<template>
  <div>
    <jl-button @click="open()">创建多条消息</jl-button>
    <jl-button @click="close()">关闭所有消息</jl-button>
  </div>
</template>

<script setup lang="ts">
import JlButton from "@/components/Button/Button.vue";
import { createMessage, closeAll } from "@/components/Message/method";

const open = () => {
  createMessage({ message: "这是一个消息提示", type: "info" });
  createMessage({ message: "这是一个消息提示", type: "success" });
  createMessage({ message: "这是一个消息提示", type: "warning" });
};

const close = () => {
  closeAll();
};

defineOptions({
  name: "CloseAllMessageDemo",
});
</script>

<style scoped></style>
