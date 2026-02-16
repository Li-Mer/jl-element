import type { Placement, Options } from "@popperjs/core";

export interface TooltipProps {
  content?: string;
  trigger?: "hover" | "click";
  placement?: Placement;
  manual?: boolean;
  popperOptions?: Partial<Options>;
  transition?: string;
}

export interface TooltipEmits {
  (e: "visible-change", visible: boolean): void;
}
export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}
