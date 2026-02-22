import { render, h, reactive, shallowReactive } from "vue";
import type { CreateMessageProps, MessageContext } from "./types";
import MessageConstructor from "./Message.vue";
import useZIndex from "../../hooks/useZIndex";

let seed = 1;
const instances: MessageContext[] = shallowReactive([]);
export const createMessage = (props: CreateMessageProps) => {
  const { nextZIndex } = useZIndex();
  const id = `message_${seed++}`;
  const container = document.createElement("div");
  const destroy = () => {
    //删除数组中的实例
    const idx = instances.findIndex((instance) => instance.id === id);
    if (idx !== -1) {
      instances.splice(idx, 1);
    } else {
      return;
    }
    render(null, container);
  };
  //手动销毁实例，通过调整组件中的visible属性来触发组件的离场动画，动画结束后销毁实例
  //visible属性的调整通过组件实例暴露的方法来实现
  const manualDestroy = () => {
    const instance = instances.find((instance) => instance.id === id);
    if (instance) {
      instance.vm.exposed!.visible.value = false;
    }
  };
  const newProps = {
    ...props,
    id,
    zIndex: nextZIndex(),
    onDestroy: destroy,
  };
  const vnode = h(MessageConstructor, newProps);
  render(vnode, container);

  document.body.appendChild(container.firstElementChild!);
  const vm = vnode.component!;
  const instance = {
    id,
    vnode,
    vm,
    props: newProps,
    destroy: manualDestroy,
  };
  instances.push(instance);
  return instance;
};

export const getLastInstance = () => {
  return instances[instances.length - 1];
};
export const getLastBottomOffset = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id);
  if (idx <= 0) {
    return 0;
  } else {
    const prev = instances[idx - 1];
    return prev?.vm.exposed!.bottomOffset.value;
  }
};
