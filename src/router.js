import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/views/HomePage.vue';
import AboutUsPage from '@/components/views/AboutUsPage.vue';

// Define your routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUsPage
  }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Using HTML5 history mode
  routes
});

export default router;
