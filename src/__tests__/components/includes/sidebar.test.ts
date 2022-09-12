import SidebarVue from "@/components/includes/Sidebar.vue";
import router from "@/router";
import { mount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";

const mountOptions = {
  global: {
    mocks: {
      $route: "home",
      $router: {
        push: vi.fn(),
      },
    },
    plugins: [router],
  },
};

describe("Sidebar component tests!", () => {
  test("Should be defined", () => {
    const wrapper = mount(SidebarVue, mountOptions);

    expect(wrapper).toBeDefined();
  });
});
