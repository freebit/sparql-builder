import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "current",

  scrollBehavior: (to, from, savedPosition) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(savedPosition || { x: 0, y: 0 });
      }, 0);
    });
  },

  routes
});

router.afterEach(() => {
  router.app.$nextTick().then(() => {
    window.prerenderReady = true;
  });
});

export default router;
