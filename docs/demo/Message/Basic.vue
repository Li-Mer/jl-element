<template>
  <div>
    <jl-button @click="showMessage">显示消息</jl-button>
    <jl-button @click="showMessageVNode"> 创建支持 VNode 的消息 </jl-button>
  </div>
</template>

<script setup lang="ts">
import { h } from "vue";
import JlButton from "@/components/Button/Button.vue";
import { createMessage } from "@/components/Message/method";

const showMessage = () => {
  createMessage({ message: "这是一个消息提示" });
};

const showMessageVNode = () => {
  createMessage({ message: h("strong", "这是一个 VNode 消息提示") });
};

defineOptions({
  name: "BasicMessageDemo",
});
</script>

<style scoped></style>
