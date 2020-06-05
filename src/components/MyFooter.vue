<template>
  <div class="my-footer">
    <span class="my-footer-item">
      <p>Kenny</p>
    </span>
    <span class="my-footer-item">
      <i class="fab fa-github"></i>
      <a href="">github</a>
    </span>
    <span class="my-footer-item">
      <i class="fab fa-instagram"></i>
      <a href="">instagram</a>
    </span>
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

  position: absolute;
  bottom: 5%;
  right: 5%;
}

a {
  text-decoration: none;
  color: black;
}

.my-footer-item, a, i {
  margin-left: 3px;
}

</style>