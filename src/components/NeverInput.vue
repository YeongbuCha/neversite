<template>
  <div class="never-input">
    <h2>NeverInput</h2>
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

<style>
.never-input {
  border: 1px solid blue;
}

input {
  text-align: center;
  width: 80%;
}
</style>