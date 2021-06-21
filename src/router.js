import Vue from "vue";
import VueRouter from "vue-router";

// Layout import
import Landing from "./layout/Landing";

// Pages import
import Home from "./pages/Home";
// import Dashboard from './pages/dashboard/Dashboard';
Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Landing,
      children: [
        {
          path: "",
          component: Home,
          name: "Home",
        },
      ],
    },
  ],
});
