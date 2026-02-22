import type { VNode, ComponentInternalInstance } from "vue";

export interface MessageProps {
  message?: string | VNode;
  duration?: number;
  showClose?: boolean;
  type?: "success" | "warning" | "info" | "error";
  onDestroy: () => void;
  offset?: number;
  id: string;
  zIndex: number;
  transitionName?: string;
}

export interface MessageContext {
  id: string;
  vnode: VNode;
  vm: ComponentInternalInstance;
  props: MessageProps;
  destroy: () => void;
}

export type CreateMessageProps = Omit<MessageProps, "onDestroy" | "id" | "zIndex">;
