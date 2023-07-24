<script setup lang="ts">
import clsx from 'clsx'
import { HTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ HTMLAttributes {}

const props = defineProps<Props>()
</script>
<template>
  <div :class="clsx('flex gap-[10px]', props.class)" v-bind="props">
    <slot></slot>
  </div>
</template>

<style scoped></style>
