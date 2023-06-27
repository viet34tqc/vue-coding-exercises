<script setup lang="ts">
import { ref, watchEffect } from 'vue'
type Todo = {
  id: string
  name: string
  completed: boolean
}
const todos = ref<Todo[]>(JSON.parse(localStorage.getItem('vue-todo') || '[]'))
const isCheckAll = ref(false)
const editingTodo = ref<Todo | null>(null)
function addTodo(e: KeyboardEvent) {
  const value = (e.target as HTMLInputElement).value.trim()
  if (value) {
    todos.value.push({
      id: Math.floor(Math.random() * Date.now()).toString(16),
      name: value,
      completed: false
    })
    e.target.value = ''
  }
}

watchEffect(() => {
  localStorage.setItem('vue-todo', JSON.stringify(todos.value))
})

function deleteTodo(id: string) {
  todos.value = todos.value.filter((todo) => todo.id !== id)
}

function doneEdit(e: Event, todo: Todo) {
  if (editingTodo?.value?.name) {
    todo.name = editingTodo.value.name.trim()
    editingTodo.value = null
  }
}
function editTodo(todo: Todo) {
  editingTodo.value = { ...todo }
}
function cancelEdit() {
  editingTodo.value = null
}
function checkAll(e: Event) {
  isCheckAll.value = !isCheckAll.value
  todos.value.forEach((todo) => (todo.completed = isCheckAll.value))
}
</script>
<template>
  <div>
    <button @click="checkAll">Check all</button>
    <input type="text" placeholder="What needs to be done?" @keyup.enter="addTodo" />
  </div>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.completed" />
      <label @dblclick="editTodo(todo)">
        {{ todo.name }}
      </label>
      <button @click="deleteTodo(todo.id)">Delete</button>
      <input
        type="text"
        v-if="editingTodo?.id === todo.id"
        v-model="editingTodo.name"
        @vue:mounted="({ el }) => el.focus()"
        @blur="(e) => doneEdit(e, todo)"
        @keyup.enter="(e) => doneEdit(e, todo)"
        @keyup.escape="cancelEdit"
      />
    </li>
  </ul>
</template>

<style scoped></style>
