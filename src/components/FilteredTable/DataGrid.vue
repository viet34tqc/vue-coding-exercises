<script setup lang="ts">
import { capitalize, computed, ref } from 'vue'
import type { TGridColumn, TGridData } from './FilteredTable.vue'

type Props = {
  data: TGridData
  columns: Array<TGridColumn>
  searchQuery: String
}
const props = defineProps<Props>()
const sortKey = ref<TGridColumn | ''>('')
const sortOrder = ref(
  props.columns.reduce((acc, cur) => ((acc[cur] = 1), acc), {} as Record<TGridColumn, number>)
)
const filteredData = computed(() => {
  const { data, searchQuery } = props

  if (searchQuery) {
    return data.filter((row) =>
      Object.values(row).some((rowData) =>
        String(rowData).toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
  }
  if (sortKey.value) {
    const key = sortKey.value
    return data
      .slice()
      .sort((a, b) => (a[key] === b[key] ? 0 : a[key] > b[key] ? 1 : -1) * sortOrder.value[key])
  }
  return data
})

function sortBy(key: TGridColumn) {
  sortKey.value = key
  sortOrder.value[key] *= -1
}
</script>
<template>
  <table>
    <thead>
      <th v-for="column in columns" :key="column">
        <button @click="sortBy(column)">
          {{ capitalize(column) }}
        </button>
      </th>
    </thead>
    <tbody>
      <tr v-for="row in filteredData" :key="row.name">
        <td>{{ row.name }}</td>
        <td>{{ row.power }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
