<template>
  <component :is="element" class="text-sm text-danger block" v-if="message">
    {{ message }}
  </component>
</template>

<script lang="ts" setup>
type ErrorProps = {
  element?: string;
  message?: string;
};
withDefaults(defineProps<ErrorProps>(), {
  element: "span",
});
</script>
