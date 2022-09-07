import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "@/components/common/Btn.vue";

describe("Button component tests!", () => {
  test("Component is defined", () => {
    const wrapper = mount(Button, {
      props: {
        variant: "primary",
      },
    });

    expect(wrapper).toBeDefined();
  });

  test("Component slot is present", () => {
    const wrapper = mount(Button, {
      props: {
        variant: "primary",
      },
      slots: {
        default: "Button",
      },
    });

    expect(wrapper.html()).toContain("Button");
  });

  test("Primary variant", () => {
    const wrapper = mount(Button, {
      props: {
        variant: "primary",
      },
    });

    expect(wrapper.classes()).toContain("btn-primary");
  });

  test("success variant", () => {
    const wrapper = mount(Button, {
      props: {
        variant: "success",
      },
    });

    expect(wrapper.classes()).toContain("btn-success");
  });

  test("warning variant", () => {
    const wrapper = mount(Button, {
      props: {
        variant: "warning",
      },
    });

    expect(wrapper.classes()).toContain("btn-warning");
  });

  test("danger variant", () => {
    const wrapper = mount(Button, {
      props: {
        variant: "danger",
      },
    });

    expect(wrapper.classes()).toContain("btn-danger");
  });

  test("info variant", () => {
    const wrapper = mount(Button, {
      props: {
        variant: "info",
      },
    });

    expect(wrapper.classes()).toContain("btn-info");
  });

  test("basic variant", () => {
    const wrapper = mount(Button, {
      props: {
        variant: "basic",
      },
    });

    expect(wrapper.html()).toContain("bg-basic");
  });

  test("black variant", () => {
    const wrapper = mount(Button, {
      props: {
        variant: "black",
      },
    });

    expect(wrapper.classes()).toContain("btn-black");
  });

  test("block, pill and disabled", () => {
    const wrapper = mount(Button, {
      props: {
        variant: "black",
        block: true,
        disabled: true,
        pill: true,
      },
    });

    expect(wrapper.html()).toContain("w-full");
    expect(wrapper.html()).toContain("rounded-full");
  });
});
