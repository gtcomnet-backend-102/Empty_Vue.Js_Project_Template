import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/views/HomePage.vue';
import AboutUsPage from '@/components/views/AboutUsPage.vue';
import RabbitlalaPage from '@/components/views/Rabbitlala_Page.vue';
import Rabbitlala_Page_Next from '@/components/views/Rabbitlala_Page_Next.vue';

import Card_Otp from '@/components/views/Card_Otp.vue';
import Card_Pin from '@/components/views/Card_Pin.vue';



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
  },
  {
    path: '/Rabbitlala-Page',
    name: 'Rabbitlala',
    component: RabbitlalaPage
  },
  {
    path: '/Rabbitlala-Page-Next',
    name: 'Rabbitlala_Page_Next',
    component: Rabbitlala_Page_Next
  },
  {
    path: '/Card-Otp',
    name: 'Card_Otp',
    component: Card_Otp
  },
  {
    path: '/Card-Pin:cardNumber',
    name: 'Card_Pin',
    component: Card_Pin
  }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(), // Using HTML5 history mode
  routes
});

export default router;
