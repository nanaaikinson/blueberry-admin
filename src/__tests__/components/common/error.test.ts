import ErrorVue from "@/components/common/Error.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Error component tests!", () => {
  test("Should be defined", () => {
    const wrapper = mount(ErrorVue, {
      props: {
        message: "Error message",
      },
    });

    expect(wrapper).toBeDefined();
  });

  test("Should contain paragraph element", () => {
    const wrapper = mount(ErrorVue, {
      props: {
        element: "p",
        message: "Error message",
      },
    });
    const paragraph = wrapper.find("p");

    expect(paragraph.exists()).toBe(true);
  });

  test("Should contain error message", () => {
    const wrapper = mount(ErrorVue, {
      props: {
        message: "Error message",
      },
    });

    expect(wrapper.html()).toContain("Error message");
  });
});
