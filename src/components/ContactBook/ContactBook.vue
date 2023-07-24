<script setup lang="ts">
import { ref } from 'vue'
import ContactBookForm from './ContactBookForm.vue'
import ContactBookList from './ContactBookList.vue'
import type { Person, Persons } from './types'

const persons = ref<Persons>({})

const handleCreateOrUpdate = (person: Person) => {
  persons.value[person.id] = person
}
</script>
<template>
  <div>
    <fieldset className="mb-4">
      <legend>Form:</legend>
      <ContactBookForm @submit="handleCreateOrUpdate" />
    </fieldset>
    <fieldset className="space-y-4">
      <legend>List:</legend>
      <ContactBookList :persons="persons" @update="handleCreateOrUpdate" />
    </fieldset>
  </div>
</template>

<style scoped></style>
