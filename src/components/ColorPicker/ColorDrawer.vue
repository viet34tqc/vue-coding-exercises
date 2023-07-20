<script setup lang="ts">
import ColorDrawerSquare from './ColorDrawerSquare.vue'

const array = Array(10).fill(0)
</script>
<template>
  <div class="wrapper">
    <ColorDrawerSquare v-for="(_, i) in array" :key="i" />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  gap: 10px;
  width: 200px;
  justify-items: center;
  grid-template-columns: repeat(5, 1fr);
}
</style>
