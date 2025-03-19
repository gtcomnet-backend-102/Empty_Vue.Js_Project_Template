import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router configuration
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Antd from 'ant-design-vue';
import "ant-design-vue/dist/reset.css";
import "./assets/assets/css/style.css";



const app = createApp(App);

// Use the router
app.use(router);
library.add(faLock);
app.use(Antd);

app.mount("#app");
