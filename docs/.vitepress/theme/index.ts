// https://vitepress.dev/guide/custom-theme
import { h, onMounted } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import "@vitepress-demo-preview/component/dist/style.css";
import "../../../src/styles/index.css";
import "./custom.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("demo-preview", ElementPlusContainer);
  },
  setup() {
    // 监听系统主题变化 file:///D:\Web\jl-element\资料\系统颜色变换.md
    onMounted(() => {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      // 初始同步：如果 VitePress 使用 auto 模式，同步系统主题
      const syncSystemTheme = () => {
        const storageTheme = localStorage.getItem("vitepress-theme-appearance");
        // 只在 auto 模式或未设置时同步系统主题
        if (!storageTheme || storageTheme === "auto") {
          const htmlEl = document.documentElement;
          if (mediaQuery.matches) {
            htmlEl.classList.add("dark");
          } else {
            htmlEl.classList.remove("dark");
          }
        }
      };

      // 初始同步
      syncSystemTheme();

      // 监听系统主题变化
      const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
        const storageTheme = localStorage.getItem("vitepress-theme-appearance");
        // 只在 auto 模式或未设置时响应系统变化
        if (!storageTheme || storageTheme === "auto") {
          const htmlEl = document.documentElement;
          if (e.matches) {
            htmlEl.classList.add("dark");
          } else {
            htmlEl.classList.remove("dark");
          }
        }
      };

      mediaQuery.addEventListener("change", handleChange);

      // 清理监听器
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    });
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
} satisfies Theme;
