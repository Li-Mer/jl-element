// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { ElementPlusContainer } from "@vitepress-demo-preview/component";
import "../../../src/styles/index.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("demo-preview", ElementPlusContainer);
  },
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
} satisfies Theme;
