import type { Placement } from "@popperjs/core";

export interface TooltipProps {
  content?: string;
  trigger?: "hover" | "click";
  placement?: Placement;
}

export interface TooltipEmits {
  (e: "visible-change", visible: boolean): void;
}
