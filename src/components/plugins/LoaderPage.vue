<template>
  <div class="loadercont" id="loader">
    <div class="lloader" id="lloader"></div>
  </div>
</template>

<script>
import $ from 'jquery'; // Add this line

export default {
  name: "LoaderPage",
  mounted() {
    setTimeout(() => {
      // document.getElementById('loadercomp').style.display = 'block';
      $(".loadercont").hide();
    }, 2000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loadercont {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999999;
  overflow: visible;
  background: #fff;
}

.lloader {
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top: 4px solid #14a79e;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
