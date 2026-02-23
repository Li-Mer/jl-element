import { describe, test, expect, vi } from "vitest";
import { nextTick } from "vue";
import { createMessage, getLastInstance, closeAll } from "./method";

///由于组件中涉及到动画，所以在测试中需要等待两帧的时间来确保动画完成，因此封装了一个 rAF 方法来实现这个功能
export const rAF = async () => {
  return new Promise((res) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(async () => {
        res(null);
        await nextTick();
      });
    });
  });
};

function getTopValue(element: Element) {
  const styles = window.getComputedStyle(element);
  const topValue = styles.getPropertyValue("top");
  return Number.parseFloat(topValue);
}

describe("createMessage", () => {
  test("调用方法应该创建对应的 Message 组件", async () => {
    const instance = createMessage({ message: "test message", duration: 0 });
    await rAF();
    expect(document.querySelector(".jl-message")).toBeTruthy();
    instance.destroy();
    await rAF();
    expect(document.querySelector(".jl-message")).toBeFalsy();
  });
  test("多次调用方法应该创建多个实例", async () => {
    createMessage({ message: "message 1", duration: 0 });
    createMessage({ message: "message 2", duration: 0 });
    await rAF();
    const elements = document.querySelectorAll(".jl-message");
    expect(elements.length).toBe(2);
    closeAll();
    await rAF();
    expect(document.querySelectorAll(".jl-message").length).toBe(0);
  });
  test("创建多个实例应该设置正确的 offset", async () => {
    createMessage({ message: "message 1", duration: 0, offset: 100 });
    createMessage({ message: "message 2", duration: 0, offset: 50 });
    await rAF();
    const elements = document.querySelectorAll(".jl-message");
    expect(elements.length).toBe(2);
    const firstTop = getTopValue(elements[0]!);
    const secondTop = getTopValue(elements[1]!);
    expect(firstTop).toBe(100);
    expect(secondTop).toBe(150);
    closeAll();
    await rAF();
    expect(document.querySelectorAll(".jl-message").length).toBe(0);
  });
});
