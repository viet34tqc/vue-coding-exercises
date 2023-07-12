<script setup lang="ts">
import { computed } from 'vue'
import { Avatar } from './types'

const props = defineProps<{ ava: Avatar }>()
const avaName = computed(() =>
  props.ava.name
    .trim()
    .split(' ')
    .map((w: string) => w.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2)
)
</script>
<template>
  <div className="item">
    <img v-if="ava?.img" :src="ava.img" :alt="ava.name" />
    <span v-else>{{ avaName }}</span>
  </div>
</template>

<style scoped>

</style>
