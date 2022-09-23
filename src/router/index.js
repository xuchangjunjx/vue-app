import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home/main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "",
        component: () => import("../views/home//page-a.vue"),
      },
      {
        path: "/child-router",
        component: () => import("../views/home/child-router.vue"),
        children: [
          {
            path: "",
            redirect: "page1",
          },
          {
            path: "page1",
            component: () => import("../views/home/child-router/page1.vue"),
          },
          {
            path: "page2",
            component: () => import("../views/home/child-router/page2.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
