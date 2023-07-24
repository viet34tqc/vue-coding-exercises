<script setup lang="ts">
import { ref } from 'vue'
import VButton from '../ui/VButton/VButton.vue'
import ContactBookForm from './ContactBookForm.vue'
import type { Person, Persons } from './types'

type Props = {
  persons: Persons
}
const props = defineProps<Props>()
const emit = defineEmits(['update'])

const editedItem = ref<string>('')

const handleEditContact = (person: Person) => {
  emit('update', person)
  editedItem.value = ''
}
</script>
<template>
  <div v-if="Object.keys(persons).length === 0">List is empty</div>
  <ul v-else>
    <li v-for="person in Object.values(props.persons)" :key="person.id">
      <ContactBookForm
        v-if="editedItem === person.id"
        @submit="handleEditContact(person)"
        :initialValue="person"
      />
      <div v-else className="flex gap-4 items-center">
        <span>Name: {{ person.name }}</span>
        <span>City: {{ person.city }}</span>
        <VButton @click="editedItem = person.id">Edit</VButton>
      </div>
    </li>
  </ul>
</template>

<style scoped></style>
