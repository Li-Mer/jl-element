---
title: Collapse | J-Element
description: Collapse 组件的文档
---

# Collapse 组件

常用的折叠面板组件，通过折叠面板收纳内容区域。

## 基础用法

可同时展开多个面板，面板之间不影响

<preview path="../demo/Collapse/Basic.vue" title="基础用法" description="Collapse 组件的基础用法"></preview>

## 手风琴模式

只能展开一个面板，展开一个面板会自动关闭其他面板。

通过 `accordion` 属性开启手风琴模式。

<preview path="../demo/Collapse/Accordion.vue" title="手风琴模式" description="Collapse 组件的手风琴模式"></preview>

## API

### Collapse Attributes

| Name       | Description                          | Type                   | Default |
| ---------- | ------------------------------------ | ---------------------- | ------- |
| modelValue | 当前展开的面板名称（可使用 v-model） | `(string \| number)[]` | []      |
| accordion  | 是否开启手风琴模式                   | `boolean`              | false   |

### Collapse Events

| Name   | Description            | Type                                    |
| ------ | ---------------------- | --------------------------------------- |
| change | 展开面板发生变化时触发 | `(value: (string \| number)[]) => void` |

### Collapse Slots

| Name    | Description    | Subtags      |
| ------- | -------------- | ------------ |
| default | 自定义默认内容 | CollapseItem |

### CollapseItem Attributes

| Name     | Description    | Type               | Default |
| -------- | -------------- | ------------------ | ------- |
| name     | 唯一标识符     | `string \| number` | —       |
| title    | 面板标题       | `string`           | —       |
| disabled | 是否禁用该面板 | `boolean`          | false   |

### CollapseItem Slots

| Name    | Description    | Type     |
| ------- | -------------- | -------- |
| default | 面板内容       | —        |
| title   | 自定义面板标题 | `string` |
