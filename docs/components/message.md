---
title: Message | J-Element
description: Message 组件的文档
---

# Message 组件

用于全局展示操作反馈信息。

## 基础用法

从顶部出现，3 秒后自动消失。 注册了一个 `createMessage` 方法用于调用。 Message 可以接收一个普通对象或一个 VNode 作为参数，它会被显示为正文内容。

<preview path="../demo/Message/Basic.vue" title="基础用法" description="Message 组件的基础用法"></preview>

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。设置 `type` 字段可以定义不同的状态，默认为 `info`。

<preview path="../demo/Message/Type.vue" title="不同状态" description="Message 组件的不同状态"></preview>

## 可关闭的消息提示

设置 `showClose` 字段可以让消息提示可关闭，默认为 `false`。Message 拥有可控的 `duration`， 默认的关闭时间为 3000 毫秒，当把这个属性的值设置为0便表示该消息不会被自动关闭。

<preview path="../demo/Message/Closable.vue" title="可关闭的消息提示" description="Message 组件的可关闭的消息提示"></preview>

## 手动关闭所有实例

调用 `createMessage.closeAll()` 可以手动关闭所有 Message 实例。

<preview path="../demo/Message/CloseAll.vue" title="手动关闭所有实例" description="Message 组件的手动关闭所有实例"></preview>

## API

### Message Attributes

使用 `createMessage` 创建信息，它接受一个Object，以下是 Object 中的属性列表。

| Name      | Description                                 | Type                                                 | Default |
| --------- | ------------------------------------------- | ---------------------------------------------------- | ------- |
| message   | 消息内容                                    | `string` \| `VNode`                                  | —       |
| type      | 消息类型                                    | `enum` - `'success'\| 'warning'\| 'info'\| 'danger'` | info    |
| showClose | 是否显示关闭按钮                            | `boolean`                                            | false   |
| duration  | 显示时间，单位毫秒，设置为 0 则不会自动关闭 | `number`                                             | 3000    |

### Message Methods

| Name  | Description           | Type       | Return Value |
| ----- | --------------------- | ---------- | ------------ |
| close | 关闭当前 Message 实例 | `function` | —            |

### Message Global Methods

| Name     | Description           | Type       | Return Value |
| -------- | --------------------- | ---------- | ------------ |
| closeAll | 关闭所有 Message 实例 | `function` | —            |
