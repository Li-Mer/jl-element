import type { Ref, InjectionKey } from "vue";

export type NameType = string | number;

export interface CollapseProps {
  modelValue: NameType[];
  accordion?: boolean;
}

export interface CollapseItemProps {
  name: NameType;
  title?: string;
  disabled?: boolean;
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>;
  handleItemClick: (name: NameType) => void;
}

export interface CollapseEmits {
  (e: "update:modelValue", value: NameType[]): void;
  (e: "change", value: NameType[]): void;
}
//InjectionKey 是 Vue 3 中用于依赖注入的类型安全标识符，确保在使用 provide 和 inject 时能够正确地识别和匹配依赖项。
export const collapseContextKey: InjectionKey<CollapseContext> = Symbol("collapseContext");
