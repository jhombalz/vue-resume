import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import PageNotFound from "../views/PageNotFound.vue";
import BuildWith from "../views/BuildWith.vue";
import SampleFileUploadView from "../views/SampleFileUploadView.vue";
import SMS from "../views/SMS.vue";
import RouteRegistration from "../views/RouteRegistration.vue";
import RouteYTD from "../views/RouteYTD.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  {
    path: "/build-with",
    name: "BuildWith",
    component: BuildWith,
  },
  {
    path: "/sample-file-upload",
    name: "SampleFileUploadView",
    component: SampleFileUploadView,
  },

  {
    path: "/sms-messaging",
    name: "SMS",
    component: SMS,
  },

  {
    path: "/registration",
    name: "RouteRegistration",
    component: RouteRegistration,
  },

  {
    path: "/ytd",
    name: "RouteYTD",
    component: RouteYTD,
  },

  // page not found
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
