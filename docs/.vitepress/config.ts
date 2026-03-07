import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JL Element",
  description: "基于 Vue3 的组件库",
  base: "/jl-element/",
  // srcDir: "components",
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "指南", link: "/start" },
        ],
        sidebar: [
          {
            text: "指南",
            items: [{ text: "快速开始", link: "/start" }],
          },
          {
            text: "组件列表",
            items: [
              { text: "Button 按钮", link: "/components/button" },
              { text: "Collapse 折叠面板", link: "/components/collapse" },
              { text: "Tooltip 文字提示", link: "/components/tooltip" },
              { text: "Dropdown 下拉菜单", link: "/components/dropdown" },
              { text: "Message 全局提示", link: "/components/message" },
            ],
          },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Guide", link: "/en/start" },
        ],
        sidebar: [
          {
            text: "Guide",
            items: [{ text: "Quick Start", link: "/en/start" }],
          },
          {
            text: "Components",
            items: [
              { text: "Button", link: "/en/components/button" },
              { text: "Collapse", link: "/en/components/collapse" },
              { text: "Tooltip", link: "/en/components/tooltip" },
              { text: "Dropdown", link: "/en/components/dropdown" },
              { text: "Message", link: "/en/components/message" },
            ],
          },
        ],
      },
    },
    ja: {
      label: "日本語",
      lang: "ja-JP",
      link: "/ja/",
      themeConfig: {
        nav: [
          { text: "ホーム", link: "/ja/" },
          { text: "ガイド", link: "/ja/start" },
        ],
        sidebar: [
          {
            text: "ガイド",
            items: [{ text: "クイックスタート", link: "/ja/start" }],
          },
          {
            text: "コンポーネント",
            items: [
              { text: "Button ボタン", link: "/ja/components/button" },
              { text: "Collapse 折りたたみ", link: "/ja/components/collapse" },
              { text: "Tooltip ツールチップ", link: "/ja/components/tooltip" },
              { text: "Dropdown ドロップダウン", link: "/ja/components/dropdown" },
              { text: "Message メッセージ", link: "/ja/components/message" },
            ],
          },
        ],
      },
    },
    "zh-TW": {
      label: "繁體中文",
      lang: "zh-TW",
      link: "/zh-TW/",
      themeConfig: {
        nav: [
          { text: "首頁", link: "/zh-TW/" },
          { text: "指南", link: "/zh-TW/start" },
        ],
        sidebar: [
          {
            text: "指南",
            items: [{ text: "快速開始", link: "/zh-TW/start" }],
          },
          {
            text: "組件列表",
            items: [
              { text: "Button 按鈕", link: "/zh-TW/components/button" },
              { text: "Collapse 折疊面板", link: "/zh-TW/components/collapse" },
              { text: "Tooltip 文字提示", link: "/zh-TW/components/tooltip" },
              { text: "Dropdown 下拉選單", link: "/zh-TW/components/dropdown" },
              { text: "Message 全局提示", link: "/zh-TW/components/message" },
            ],
          },
        ],
      },
    },
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../../src", import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      md.use(containerPreview as any);
      md.use(componentPreview as any);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 所有语言共享的配置
    socialLinks: [{ icon: "github", link: "https://github.com/Li-Mer/jl-element" }],
  },
});
