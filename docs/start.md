# 快速开始

这里介绍如何在项目中安装和使用 JL Element 组件库。

## 安装

使用 npm 安装：

```bash
npm install @jinli6386/element --save
```

或使用 yarn：

```bash
yarn add @jinli6386/element
```

## 完整引入

在 `main.js` 或 `main.ts` 中引入所有组件：

```js
// 引入所有组件
import JlElement from "@jinli6386/element";
// 引入样式
import "@jinli6386/element/dist/index.css";

import { createApp } from "vue";
import App from "./App.vue";

// 全局注册
const app = createApp(App);
app.use(JlElement);
app.mount("#app");
```

然后在模板中直接使用：

```vue
<template>
  <jl-button>我是 JlButton</jl-button>
</template>
```

## 按需引入

如果只需要使用部分组件，可以按需引入：

```vue
<template>
  <Button>我是 JlButton</Button>
</template>

<script setup>
import { Button } from "@jinli6386/element";
import "@jinli6386/element/dist/index.css";
</script>
```

## 开始使用

安装完成后，就可以在项目中使用组件了。查看[组件文档](/components/button)了解更多用法。
