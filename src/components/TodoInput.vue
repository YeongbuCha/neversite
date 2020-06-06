<template>
  <div class="todo-input">
    <h3>ADD TODO HERE</h3>
    <textarea 
      v-model="newTodoInput"
      @keypress.enter="onTodoInputSubmit"
      type="text"
      placeholder="Type and Enter
to add TODO"></textarea>
      
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

textarea {
  text-align: center;
  width: 70%;
  height: 130px;
  font-size: 1.2rem;
  border: 2px solid black;
  border-radius: 10px;
  margin-top: 30px;
  white-space: pre-wrap;
}

h3 {
  font-size: 1.5rem;
  margin-top: 20px;
}
</style>