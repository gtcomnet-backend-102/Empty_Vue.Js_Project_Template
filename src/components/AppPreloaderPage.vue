<template>
  <div class="preloader-wrapper">
    <div class="preloader"></div>
  </div>
</template>

<script>
export default {
  name: 'AppPreloaderPage',
};
</script>

<style scoped>
.preloader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  z-index: 9999;
}

.preloader {
  border: 5px solid #f3f3f3; 
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
