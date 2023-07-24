<script setup lang="ts">
import clsx from 'clsx'
import type { InputHTMLAttributes } from 'vue'

interface Props extends /* @vue-ignore */ InputHTMLAttributes {
  modelValue: string
}
const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    v-bind="props"
    :value="modelValue"
    @input="$emit('update:modelValue', $event?.target?.value)"
    :class="
      clsx(
        'flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
        props.class
      )
    "
  />
</template>

<style scoped></style>
