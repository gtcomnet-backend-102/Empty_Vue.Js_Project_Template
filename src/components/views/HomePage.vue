<template>
  <div>
    <h1>Home</h1>
    <h1>Home</h1>
    <h1>Home</h1>
    <!-- Simulate a page load with a timeout or actual content load -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  mounted() {
    // Emit an event when the page is fully loaded
    this.$emit('loaded');
  }
}
</script>

<style scoped>
/* Styles for HomePage */
</style>
