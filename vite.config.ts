import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
// 1. 修改导入路径，直接引用 vite 子模块
import VueMacros from "unplugin-vue-macros/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // 2. 直接调用 VueMacros()，不需要 .vite()
    VueMacros({
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
