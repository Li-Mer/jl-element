import type { App } from "vue";
import Button from "@/components/Button";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import Collapse, { CollapseItem } from "@/components/Collapse";
import Tooltip from "@/components/Tooltip";
import "@/styles/index.css";

const components = [Button, Dropdown, Icon, Collapse, CollapseItem, Tooltip];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name as string, component);
  });
};

export {
  install,
  Button,
  Button as JlButton,
  Dropdown,
  Dropdown as JlDropdown,
  Icon,
  Icon as JlIcon,
  Collapse,
  Collapse as JlCollapse,
  CollapseItem,
  CollapseItem as JlCollapseItem,
  Tooltip,
  Tooltip as JlTooltip,
};

export default { install };
