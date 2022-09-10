<template>
  <aside
    class="w-60 fixed top-0 h-full bg-dark-blue z-20 flex flex-col space-y-8"
  >
    <div
      class="flex items-center px-8 text-white font-semibold capitalize text-lg border-b border-dark-blue-dark"
      :style="{ height: logoSectionHeight }"
    >
      Blueberry
    </div>

    <ul class="flex flex-col space-y-2">
      <li>
        <router-link :to="{ name: 'app' }" class="nav-link">
          <HomeIcon class="h-5 w-5" />
          <span>Dashboard</span>
        </router-link>
      </li>

      <li>
        <a href="#" class="nav-link">
          <UsersIcon class="h-5 w-5" />
          <span>Customers</span>
        </a>
      </li>

      <li>
        <a href="#" class="nav-link">
          <TagIcon class="h-5 w-5" />
          <span>Products</span>
        </a>
      </li>

      <li>
        <a href="#" class="nav-link">
          <ShoppingCartIcon class="h-5 w-5" />
          <span>Orders</span>
        </a>
      </li>

      <li>
        <a href="#" class="nav-link">
          <DocumentIcon class="h-5 w-5" />
          <span>Invoices</span>
        </a>
      </li>

      <li>
        <a href="#" class="nav-link">
          <ChartBarSquareIcon class="h-5 w-5" />
          <span>Charts</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import {
  HomeIcon,
  UsersIcon,
  TagIcon,
  DocumentIcon,
  ShoppingCartIcon,
  ChartBarSquareIcon,
} from "@heroicons/vue/24/outline";

type SidebarProps = {
  logoSectionHeight?: string;
};

withDefaults(defineProps<SidebarProps>(), {
  logoSectionHeight: "50px",
});
</script>

<style scoped>
.nav-link {
  @apply flex items-center text-basic-semi w-full py-2 px-7 space-x-3 transition-all duration-300 hover:text-white;
}
.router-link-exact-active {
  @apply text-white bg-[#0f2d69];
}
</style>