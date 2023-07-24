<script setup lang="ts">
import type { LabelHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ LabelHTMLAttributes {}

const props = defineProps<Props>()
</script>
<template>
  <label v-bind="props"><slot></slot></label>
</template>

<style scoped></style>
