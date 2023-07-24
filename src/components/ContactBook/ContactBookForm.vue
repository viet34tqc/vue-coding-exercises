9
<script setup lang="ts">
import { uniqueId } from '@/utils'
import { ref } from 'vue'
import VFormControl from '../ui/VButton/FormFields/VFormControl.vue'
import VInput from '../ui/VButton/FormFields/VInput.vue'
import VLabel from '../ui/VButton/FormFields/VLabel.vue'
import VButton from '../ui/VButton/VButton.vue'
import type { Person } from './types'

type Props = {
  initialValue?: Person
}

const defaultPerson = {
  id: '',
  name: '',
  city: ''
}

const emit = defineEmits(['submit'])
const props = withDefaults(defineProps<Props>(), {
  initialValue: () => ({
    id: '',
    name: '',
    city: ''
  })
})

const person = ref<Person>(props.initialValue)

const handleSubmit = () => {
  const id = uniqueId()
  emit('submit', { ...person.value, id })
}
</script>

<template>
  <form className="flex items-end gap-4" @submit.prevent="handleSubmit">
    <VFormControl className="items-center">
      <VLabel>Name</VLabel>
      <VInput v-model="person.name" />
    </VFormControl>
    <VFormControl className="items-center">
      <VLabel>City</VLabel>
      <VInput v-model="person.city" />
    </VFormControl>
    <VButton type="submit">Submit</VButton>
  </form>
</template>

<style scoped></style>
