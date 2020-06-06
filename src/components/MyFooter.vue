<template>
  <div class="my-footer">
    <div class="my-helpers">
      <p class="my-helper">Click : Change Status</p>
      <p class="my-helper">/</p>
      <p class="my-helper">Ctrl + Click : Delete</p>
    </div>
    <div class="my-footer-items">
      <span class="my-footer-item">
        <span>Kenny</span>
      </span>
      <span class="my-footer-item">
        <i class="fab fa-github"></i>
        <a href="https://github.com/YeongbuCha/neversite">github</a>
      </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.my-footer {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 15px;
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 5%;
}

a {
  text-decoration: none;
  color: black;
}

.my-footer-items {
  margin-top: 15px;
}

.my-footer-item, a, i {
  margin-left: 3px;
  margin-bottom: 7px;
}

.my-helpers {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 1.2rem;
  font-weight: 700;
}

.my-helper {
  margin-right: 15px;
}


</style>