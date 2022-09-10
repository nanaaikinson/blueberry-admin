import SidebarVue from "@/components/includes/Sidebar.vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Sidebar component tests!", () => {
  test("Should be defined", () => {
    const wrapper = mount(SidebarVue);

    expect(wrapper).toBeDefined();
  });
});
