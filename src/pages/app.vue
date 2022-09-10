<template>
  <Head>
    <body class="pt-[60px]"></body>
  </Head>

  <Sidebar />
  <Header />

  <main class="ml-60 w-full relative pl-3">
    <router-view />
  </main>
</template>

<script lang="ts" setup>
import Sidebar from "@/components/includes/Sidebar.vue";
import Header from "@/components/includes/Header.vue";
import { Head } from "@vueuse/head";
</script>
