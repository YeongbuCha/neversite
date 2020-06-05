<template>
  <div class="never-list">
    <div class="never-wrapper">
      <NeverListItem 
        @imgClick="onImgClick"
        @imgCtrlClick="onImgCtrlClick"
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
  },
  methods: {
    onImgClick(neverSite) {
      this.$emit('imgClick', neverSite)
    },
    onImgCtrlClick(neverSite) {
      this.$emit('imgCtrlClick', neverSite)
    }
  }
}
</script>

<style scoped>


.never-list {
  /* border: 1px solid red; */
  margin: 20px 20px 0 20px;
}
.never-wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: repeat(3, 1fr);
}
</style>