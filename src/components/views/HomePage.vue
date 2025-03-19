<template>
  <div>
    
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
