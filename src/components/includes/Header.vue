<template>
  <nav
    :class="[`bg-white shadow-sm fixed top-0 left-0 right-0 w-full z-10`]"
    :style="{ height: height }"
  >
    <div class="px-10 pl-[250px] flex h-full items-center justify-between">
      <button>
        <Bars3Icon class="h-6 w-6" />
      </button>

      <ul class="flex items-center space-x-4">
        <li>
          <button class="flex items-center space-x-2">
            <BellIcon class="h-5 w-5 text-basic-semi" />
          </button>
        </li>
        <li>
          <button class="flex items-center space-x-2">
            <Cog6ToothIcon class="h-5 w-5 text-basic-semi" />
          </button>
        </li>
        <li>
          <button class="flex items-center space-x-2">
            <div class="avatar avatar-sm bg-opacity-20 !text-xs">NK</div>
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { Bars3Icon, BellIcon, Cog6ToothIcon } from "@heroicons/vue/24/solid";

type HeaderProps = {
  height?: string;
};

withDefaults(defineProps<HeaderProps>(), {
  height: "50px",
});
</script>
