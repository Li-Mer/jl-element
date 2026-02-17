import { describe, test, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import Tooltip from "./Tooltip.vue";

const onVisibleChange = vi.fn();
describe("Tooltip.vue", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  test("basic", async () => {
    const wrapper = mount(
      () => (
        <div>
          <div id="outside"></div>
          <Tooltip content="This is a tooltip" trigger="click" onVisible-change={onVisibleChange}>
            <button id="trigger">Trigger</button>
          </Tooltip>
        </div>
      ),
      {
        attachTo: document.body,
      },
    );
    //静态测试
    const triggerArea = wrapper.find("#trigger");
    expect(triggerArea.exists()).toBeTruthy();
    expect(wrapper.find(".jl-tooltip__popper").exists()).toBeFalsy();
    console.log("before", wrapper.html());
    //测试点击行为
    triggerArea.trigger("click");
    await vi.runAllTimers();
    expect(wrapper.find(".jl-tooltip__popper").exists()).toBeTruthy();
    expect(wrapper.find(".jl-tooltip__popper").text()).toBe("This is a tooltip");
    expect(onVisibleChange).toHaveBeenCalledWith(true);
    console.log("faster", wrapper.html());
    //测试外侧再次点击行为
    wrapper.find("#outside").trigger("click");
    await vi.runAllTimers();
    expect(wrapper.find(".jl-tooltip__popper").exists()).toBeFalsy();
    expect(onVisibleChange).toHaveBeenCalledWith(false);
  });
});
