import { ref, inject, type InjectionKey, type Ref } from "vue";
import type { Language } from "./types";
import zhCn from "./lang/zh-cn";

// 拿到嵌套对象中某个 key path 的值，如 t('message.closeText')
function get(obj: any, path: string): string {
  const keys = path.split(".");
  let result: any = obj;
  for (const key of keys) {
    result = result?.[key];
  }
  return result ?? path;
}

// 创建翻译函数
function buildTranslator(locale: Ref<Language>) {
  return (path: string) => {
    return get(locale.value, path);
  };
}

// provide/inject key
export const localeContextKey: InjectionKey<Ref<Language>> = Symbol("localeContextKey");

// 默认语言（显式指定类型，避免类型推断过于具体）
const defaultLocale = ref<Language>(zhCn);

// 供组件内部使用的 composable
export function useLocale() {
  // 优先使用注入的语言（来自 ConfigProvider），否则用默认语言
  const locale = inject(localeContextKey, defaultLocale);
  const t = buildTranslator(locale);
  return { locale, t };
}

// 供外部切换语言
export function setLocale(lang: Language) {
  defaultLocale.value = lang;
}

export { zhCn };
export { default as en } from "./lang/en";
