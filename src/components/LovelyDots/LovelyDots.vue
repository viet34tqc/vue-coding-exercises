<script setup lang="ts">
import { ref } from 'vue'
import VButton from '../ui/VButton/VButton.vue'

type TDot = {
  x: number
  y: number
}

const dots = ref<TDot[]>([])
const popped = ref<TDot[]>([]) // This state stores undo dots.

const handleAddDot = (e: MouseEvent) => {
  dots.value.push({ x: e.pageX, y: e.pageY })
}

const handleUndo = () => {
  const poppedDot = dots.value.pop()
  if (poppedDot) {
    popped.value.push(poppedDot)
  }
}

const handleRedo = () => {
  const redoDot = popped.value.pop()
  if (redoDot) {
    dots.value.push(redoDot)
  }
}
console.log('dots', dots.value)
</script>
<template>
  <div className="wrapper">
    <div class="buttons">
      <VButton v-if="dots.length > 0" @click="handleUndo">Undo</VButton>
      <VButton v-if="popped.length > 0 && dots.length > 0" @click="handleRedo">Redo</VButton>
    </div>

    <div className="clickArea" @click="handleAddDot">
      <div
        v-for="dot in dots"
        :key="dot.x"
        className="dot"
        :style="{ top: `${dot.y - 10}px`, left: `${dot.x - 10}px` }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: calc(100vh - 2rem);
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
}

.clickArea {
  flex-basis: 100%;
  width: 100%;
}

.dot {
  position: absolute;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: red;
}
</style>
