<template>
  <div class="never-input">
    <input 
      v-model="newNeverInput" 
      @keypress.enter="onNeverInputSubmit"
      type="text"
      placeholder="Type and Enter to add NEVERSITE"
      autofocus
      >
  </div>
</template>

<script>
export default {
  name: 'NeverInput',
  data() {
    return {
      newNeverInput: ''
    }
  },
  methods: {
    onNeverInputSubmit() {
      if (this.newNeverInput.trim()) {
        this.$emit('neverInputSubmit', {
          id: Date.now(),
          content: this.newNeverInput.toUpperCase(),
          isVisited: false
        })
      }
      this.newNeverInput = ''
    }
  }
}
</script>

<style scoped>
.never-input {
  margin-top: 20px;
}

input {
  text-align: center;
  width: 90%;
  height: 50px;
  font-size: 1.2rem;
  border: 3px solid black;
  border-radius: 10px;

}
</style>