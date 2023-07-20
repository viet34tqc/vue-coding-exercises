<script setup lang="ts">
import { inject } from 'vue'
import type { TColorPickerContext } from './types'

const colors = ['red', 'green', 'blue', 'yellow']
const { currentColor } = inject('colorPickerContext') as TColorPickerContext
</script>
<template>
  <div class="flex gap-4">
    <div v-for="c in colors" :key="c" class="flex items-center gap-2">
      <label :for="c">{{ c }}</label>
      <input :id="c" type="radio" :value="c" v-model="currentColor" name="color" />
    </div>
  </div>
</template>

<style scoped></style>
