import HeaderVue from "@/components/includes/Header.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Header component tests!", () => {
  test("Should be defined", () => {
    const wrapper = mount(HeaderVue);

    expect(wrapper).toBeDefined();
  });
});
