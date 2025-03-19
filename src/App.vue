<template>
  <!-- <AppPreloaderPage v-if="isLoading" /> -->
  <!-- <HeaderPage /> -->
 <main>
  <router-view @loaded="hidePreloader" /> <!-- Listen for event to hide preloader -->
 </main>
  <!-- <FooterPage /> -->
</template>

<script>
import { ref } from 'vue';
// import HeaderPage from "./components/HeaderPage.vue";
// import FooterPage from "./components/FooterPage.vue";
// import AppPreloaderPage from "./components/AppPreloaderPage.vue";

export default {
  name: "App",
  components: {
    // // HeaderPage,
    // FooterPage,
    // AppPreloaderPage,
  },
  setup() {
    const isLoading = ref(true); // Set to true to show the preloader initially

    // Function to hide the preloader
    const hidePreloader = () => {
      isLoading.value = false;
    };

    return {
      isLoading,
      hidePreloader
    };
  },
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1; /* Pushes the footer to the bottom */
}

</style>
