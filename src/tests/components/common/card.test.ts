import CardVue from "@/components/common/Card.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Card component tests!", () => {
  test("Should be defined", () => {
    const wrapper = mount(CardVue);

    expect(wrapper).toBeDefined();
  });

  test("Slot to be present", () => {
    const wrapper = mount(CardVue, {
      slots: {
        default: "Slot",
      },
    });

    expect(wrapper.html()).toContain("Slot");
  });
});
