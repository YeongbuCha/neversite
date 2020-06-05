<template>
  <div class="never-input">
    <input 
      v-model="newInput" 
      @keypress.enter="onInputSubmit"
      type="text"
      placeholder="Type and Enter to add NEVERSITE"
      >
  </div>
</template>

<script>
export default {
  name: 'NeverInput',
  data() {
    return {
      newInput: ''
    }
  },
  methods: {
    onInputSubmit() {
      if (this.newInput.trim()) {
        this.$emit('inputSubmit', {
          id: Date.now(),
          content: this.newInput.toUpperCase(),
          isVisited: false
        })
      }
      this.newInput = ''
    }
  }
}
</script>

<style scoped>
.never-input {
  border: 1px solid blue;

  margin-top: 20px;
}

input {
  text-align: center;
  width: 80%;
  height: 50px;
  font-size: 1.2rem;
  border: 3px solid black;
  border-radius: 10px;

}
</style>