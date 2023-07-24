<script setup lang="ts">
import clsx from 'clsx'
import type { BtnHTMLAttr, LinkHTMLAttr } from './types'

// Here is tailwind class for variants
const variants = {
  primary: 'bg-blue-600 text-white hover:bg-gray-50:text-blue-600',
  secondary: 'bg-gray-200 text-black-300 hover:bg-blue-600:text-white'
}

type BaseProps = {
  variant?: keyof typeof variants
}

type ButtonOrAnchorProps = BaseProps & BtnHTMLAttr & LinkHTMLAttr
type ButtonProps = ButtonOrAnchorProps

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary'
})
const newProps = { ...props }
// Here you can add style from tailwind, below is the demo
const className = clsx(
  'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none',
  variants[props.variant],
  props.class
)
newProps.class = className
let As = 'button'
if (newProps.href) {
  As = 'a'
}
if (As === 'button') {
  newProps['type'] = newProps.type ? newProps.type : 'button'
}
</script>
<template>
  <As v-bind="newProps"><slot></slot></As>
</template>

<style scoped></style>
