<script setup lang="ts">
import { inject, ref } from 'vue'
import type { TColorPickerContext } from './types'

const { currentColor } = inject('colorPickerContext') as TColorPickerContext
const bg = ref('#ccc')
</script>
<template>
  <div class="w-3 h-3" :style="{ backgroundColor: bg }" @click="bg = currentColor"></div>
</template>

<style scoped></style>
