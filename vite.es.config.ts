import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
// 1. 修改导入路径，直接引用 vite 子模块
import VueMacros from "unplugin-vue-macros/vite";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";

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
    dts({
      tsconfigPath: "./tsconfig.app.json",
      outDir: "dist/types",
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "JlElement",
      fileName: "jl-element",
      format: ["es"],
    },
    //file:///D:\Web\jl-element\资料\打包.md
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
      ],
      output: {
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.names.some((n) => n.endsWith(".css"))) {
            return "index.css";
          }
          return (chunkInfo.names.length > 0 ? chunkInfo.names[0] : chunkInfo.name) ?? "unknown";
        },
      },
    },
  },
});
