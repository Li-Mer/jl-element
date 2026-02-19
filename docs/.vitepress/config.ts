import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";
import { containerPreview, componentPreview } from "@vitepress-demo-preview/plugin";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JL Element",
  description: "基于 Vue3 的组件库",
  base: "/jl-element/",
  // srcDir: "components",
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
    nav: [
      { text: "Home", link: "/" },
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
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Li-Mer/jl-element" }],
  },
});
