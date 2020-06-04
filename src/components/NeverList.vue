<template>
  <div class="never-list">
    <div class="wrapper">
      <NeverListItem 
        v-for="neverSite in neverSites" 
        :key="neverSite.id"
        :neverSite="neverSite" />
    </div>
  </div>
</template>

<script>
import NeverListItem from './NeverListItem.vue'

export default {
  name: 'NeverList',
  components: {
    NeverListItem
  },
  props: {
    neverSites: Array
  }
}
</script>

<style scoped>


.never-list {
  border: 1px solid red;
}
.wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(3, 1fr);
}
</style>