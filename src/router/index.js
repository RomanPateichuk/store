import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/ModelView.vue";

const routes = [
  {
    path: "/",
    name: "model",
    component: HomeView,
  },
  {
    path: "/reviews",
    name: "reviews",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ReviewsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
