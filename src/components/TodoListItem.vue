<template>
  <div class="todo-list-item">
    <div 
      class="clickable"
      @click.exact="onTodoClick"
      @click.ctrl.exact="onTodoCtrlClick">
    </div>
    <div 
      class='x-block'
      v-if="todo.isCompleted"
    >
      <div><i class="fas fa-check check-icon"></i>DONE</div>
    </div>
    <i class="fas fa-thumbtack pin-icon"></i>
    <h3>
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
  background: #f1c40f;
  margin-bottom: 10px;
  width: 95%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
}

h3 {
  width: 100%;
  font-size: 1.5rem;
  word-wrap: break-word;
}

.pin-icon {
  position: absolute;
  top: -5px;
  left: 50%;
  transform: rotate(30deg)
}

.clickable {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
}

.x-block {
  width: 100%;
  height: 100%;
  position: absolute;  
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(3, 3, 3, 0.7);
  color: white;  
  font-size: 1.8rem;
  /* text-decoration: line-through; */
}

.check-icon {
  margin-right: 5px;
}

</style>