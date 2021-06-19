import Vue from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
// import { Tooltip, Toast, Popover } from 'bootstrap';
// import Alert from 'bootstrap/js/dist/alert';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  // Tooltip,
  // Toast,
  // Popover,
  // Alert,
}).$mount("#app");
