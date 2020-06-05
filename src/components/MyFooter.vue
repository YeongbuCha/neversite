<template>
  <div class="my-footer">
    <div class="my-helpers">
      <p class="my-helper">Ctrl + Click : Delete</p>
      <p class="my-helper">Click : Change Status</p>
    </div>
    <div class="my-footer-items">
      <span class="my-footer-item">
        <span>Kenny</span>
      </span>
      <span class="my-footer-item">
        <i class="fab fa-github"></i>
        <a href="https://github.com/YeongbuCha/neversite">github</a>
      </span>
      <span class="my-footer-item">
        <i class="fab fa-instagram"></i>
        <a href="https://www.instagram.com/yeongbu/">instagram</a>
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  position: absolute;
  z-index: 1;
  bottom: 5%;
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
}

.my-helpers {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  font-size: 1.2rem;
  font-weight: 700;
}

.my-helper {
  margin-bottom: 5px;
}

</style>