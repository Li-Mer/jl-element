---
title: Dropdown | J-Element
description: Dropdown 组件的文档
---

# Dropdown 组件

Dropdown 组件提供了一个下拉菜单，用户可以从中选择一个选项。

## 基础用法

悬停在下拉菜单上以展开更多操作。

<preview path="../demo/Dropdown/Basic.vue" title="基础用法" description="Dropdown 组件的基础用法"></preview>

## 触发方式

默认情况下，Dropdown 组件通过悬停触发。设置 `trigger` 字段可以定义不同的触发方式，支持 `hover` 和 `click`，默认值为 `hover`。

<preview path="../demo/Dropdown/Trigger.vue" title="触发方式" description="Dropdown 组件的触发方式"></preview>

## 手动打开关闭

将 `manual` 属性设置为 true 即可， 然后可以使用实例上面的 `show` 和 `hide` 方法打开关闭下拉菜单。

<preview path="../demo/Dropdown/Manual.vue" title="手动打开关闭" description="Dropdown 组件的手动打开关闭"></preview>

## API

### Dropdown Attributes

| Name         | Description                                | Type                                           | Default |
| ------------ | ------------------------------------------ | ---------------------------------------------- | ------- |
| menu-options | 下拉菜单选项列表                           | `Array<{ label: string, value: any }>`         | —       |
| placement    | 下拉菜单出现的位置                         | `enum` - `'top'\| 'bottom'\| 'left'\| 'right'` | bottom  |
| trigger      | 触发方式                                   | `enum` - `'hover'\| 'click'`                   | hover   |
| manual       | 是否手动控制下拉菜单的显示和隐藏           | `boolean`                                      | false   |
| open-delay   | 鼠标悬停后打开下拉菜单的延迟时间，单位毫秒 | `number`                                       | 100     |
| close-delay  | 鼠标移出后关闭下拉菜单的延迟时间，单位毫秒 | `number`                                       | 100     |

### Menu Option

| Name     | Description    | Type                 | Default |
| -------- | -------------- | -------------------- | ------- |
| label    | 选项文本       | `string` \| `VNode`  | —       |
| key      | 选项值         | `string` \| `number` | —       |
| disabled | 是否禁用选项   | `boolean`            | false   |
| divider  | 是否分割线选项 | `boolean`            | false   |

### Dropdown Events

| Name           | Description                | Type         |
| -------------- | -------------------------- | ------------ |
| select         | 选项被选中时触发           | `MenuOption` |
| visible-change | 下拉菜单显示状态改变时触发 | `boolean`    |

### Dropdown Exposes

| Name | Description  | Type       |
| ---- | ------------ | ---------- |
| show | 显示下拉菜单 | `function` |
| hide | 隐藏下拉菜单 | `function` |
