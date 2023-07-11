<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const imgType = ref<'dog' | 'cat' | null>(null)
const clickCount = ref(0)
let timeoutId = ref<undefined | number>(undefined)

// We still need a click count to avoid flasing when we dbclick
watchEffect(() => {
  console.log('clickCount', clickCount.value)
  if (clickCount.value === 1) {
    timeoutId.value = setTimeout(() => {
      imgType.value = 'cat'
      clickCount.value = 0
    }, 500) // Need more delay, otherwise the dbclick cannot be caught
  } else if (clickCount.value === 2) {
    clearTimeout(timeoutId.value)
    imgType.value = 'dog'
    clickCount.value = 0
  }
})
</script>
<template>
  <button class="block" @click="() => clickCount++">Button</button>
  <img v-if="imgType !== null" :src="`https://source.unsplash.com/random/300x300/?${imgType}`" />
</template>

<style scoped></style>
