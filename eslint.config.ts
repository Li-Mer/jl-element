import { globalIgnores } from "eslint/config";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";
import pluginOxlint from "eslint-plugin-oxlint";

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{vue,ts,mts,tsx}"],
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

  ...pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,

  ...pluginOxlint.buildFromOxlintConfigFile(".oxlintrc.json"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // 允许使用 any
      "@typescript-eslint/no-unused-vars": "warn", // 未使用的变量作为警告
      // 'vue/multi-word-component-names': 'off', // 允许单个单词的组件名
      // 你可以随时添加更多想关闭的规则...
    },
  },
);
