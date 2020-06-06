<template>
  <div class="todo-list">
    <div class="todo-list-wrapper">
      <TodoListItem 
        @todoClick="onTodoClick"
        @todoCtrlClick="onTodoCtrlClick"
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue'

export default {
  name: 'TodoList',
  components: {
    TodoListItem
  },
  props: {
    todos: Array
  },
  methods: {
    onTodoClick(todo) {
      this.$emit('todoClick', todo)
    },
    onTodoCtrlClick(todo) {
      this.$emit('todoCtrlClick', todo)
    }
  }
}
</script>

<style scoped>
div.todo-list {
  margin-top: 20px;
}

.todo-list-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 360px);
}
</style>