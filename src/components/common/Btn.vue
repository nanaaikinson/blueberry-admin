<template>
  <button
    :class="['btn', variantClass, sizeClass, blockClass, pillClass]"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from "vue";

type BtnProps = {
  variant:
    | "primary"
    | "success"
    | "danger"
    | "info"
    | "warning"
    | "basic"
    | "black";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  block?: boolean;
  pill?: boolean;
  disabled?: boolean;
};

// Props
const props = withDefaults(defineProps<BtnProps>(), {
  size: "md",
  block: false,
  pill: false,
  disabled: false,
});
const { size, variant, block, pill } = toRefs(props);

// Computed
const sizeClass = computed(() => `btn-${size.value}`);
const variantClass = computed(() => {
  switch (variant.value) {
    case "basic":
      return "btn-basic bg-basic text-black";
    case "black":
      return "btn-black bg-black text-white";
    case "danger":
      return "btn-danger";
    case "success":
      return "btn-success";
    case "info":
      return "btn-info";
    case "warning":
      return "btn-warning";
    default:
      return "btn-primary";
  }
});
const blockClass = computed(() => (block.value ? `w-full` : ""));
const pillClass = computed(() => (pill.value ? `rounded-full` : ""));
</script>
