<script setup lang="ts">
import AvatarItem from './AvatarItem.vue'
import type { TAvatar } from './types'

type Props = {
  data?: any[]
  maxLength?: number
  size?: 'xs' | 'sm' | 'md' | 'lg'
}
const props = withDefaults(defineProps<Props>(), {
  data: () =>
    [
      {
        img: '',
        name: 'Thomas John ABC'
      },
      {
        img: 'https://znews-photo.zingcdn.me/w1000/Uploaded/bzivolby/2022_12_21/ntl12_zing.jpg',
        name: 'Thomas John ABC'
      },
      {
        img: 'https://imgur.com/AD3MbBi',
        name: 'Thomas John ABC'
      }
    ] as TAvatar[],
  maxLength: 2,
  size: 'xs'
})
const slicedData = props.data.slice(0, props.maxLength)
</script>

<template>
  <div :class="`wrapper ${size}`">
    <AvatarItem v-for="(ava, index) in slicedData" :key="index" :ava="ava" />

    <div v-if="data.length > maxLength" className="item">
      {{ `+${(data.length - maxLength).toString()}` }}
    </div>
  </div>
</template>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}
.wrapper {
  --size: 120px;
  display: flex;
}
.wrapper.xs {
  --size: 100px;
}
.wrapper.md {
  --size: 150px;
}
.wrapper.lg {
  --size: 180px;
}
.item {
  width: var(--size);
  height: var(--size);
  display: grid;
  place-items: center;

  border: 5px solid #fff;
  border-radius: 50%;
  background-color: #ccc;

  position: relative;
  overflow: hidden;
}
</style>
