// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./src/views/Home.vue";
import Authview from "@/views/Authview.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/auth",
    name: "Auth",
    component: Authview,
  },

  // ... other routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
