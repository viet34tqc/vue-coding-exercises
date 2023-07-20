<script setup lang="ts">
import { provide, ref } from 'vue'
import ColorDrawer from './ColorDrawer.vue'
import ColorPickerTable from './ColorPickerTable.vue'
import type { TColorPickerContext } from './types'

const currentColor = ref('')
provide<TColorPickerContext>('colorPickerContext', { currentColor })
</script>
<template>
  <div class="flex flex-col gap-4 items-center">
    <ColorPickerTable />
    <ColorDrawer />
  </div>
</template>

<style scoped></style>
