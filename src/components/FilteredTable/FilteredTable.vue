<script setup lang="ts">
import { ref } from 'vue'
import DataGrid from './DataGrid.vue'

export type TGridData = typeof gridData
export type TGridColumn = keyof TGridData[0]

const searchQuery = ref('')
const gridColumns = ['name', 'power'] as TGridColumn[]
const gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]
</script>

<template>
  <form>Search <input name="query" v-model="searchQuery" /></form>
  <DataGrid :data="gridData" :columns="gridColumns" :searchQuery="searchQuery" />
</template>

<style scoped></style>
