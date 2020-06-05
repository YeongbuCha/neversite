<template>
  <div class="todo-input">
    <h3>ADD TODO HERE</h3>
    <input 
      v-model="newTodoInput"
      @keypress.enter="onTodoInputSubmit"
      type="text"
      placeholder="Type and Enter to add TODO">
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data() {
    return {
      newTodoInput: ''
    }
  },
  methods: {
    onTodoInputSubmit() {
      if (this.newTodoInput.trim()) {
        this.$emit('todoInputSubmit', {
          id: Date.now(),
          content: this.newTodoInput,
          isCompleted: false
        })
      }
      this.newTodoInput = ''
    }
  }
}
</script>

<style scoped>
div.todo-input {
  border: 1px solid red;
  margin-top: 20px;
}

h3 {
  font-size: 1.5rem;
}
</style>