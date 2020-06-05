<template>
  <div class="todo-list-item">
    <div 
      class='x-block'
      v-if="todo.isCompleted"
      @click.exact="onTodoClick"
      @click.ctrl.exact="onTodoCtrlClick"
    >
    <div>DONE</div>
    </div>
    <h3 
      @click.exact="onTodoClick"
      @click.ctrl.exact="onTodoCtrlClick" >
      {{ todo.content }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object
  },
  methods: {
    onTodoClick() {
      this.$emit('todoClick', this.todo)
    },
    onTodoCtrlClick() {
      this.$emit('todoCtrlClick', this.todo)
    }
  }
}
</script>

<style scoped>
div.todo-list-item {
  border: 1px solid green;
  margin-bottom: 10px;
  height: 75px;
}

h3 {
  font-size: 2rem;
}
</style>