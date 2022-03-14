// Importation Modules et/ou client
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "signup",
    component: () => import("../views/signup.vue"),
  },
  {
    path: "/user/:userId",
    name: "user",
    component: () => import("../views/user.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("../views/settings.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
