// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import DemoPreview from "./DemoPreview.vue";
import "@vitepress-demo-preview/component/dist/style.css";
import "../../../src/styles/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("demo-preview", DemoPreview);
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
} satisfies Theme;
