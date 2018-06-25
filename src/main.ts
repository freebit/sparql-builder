import Vue from "vue";
import Root from "./Root.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Root)
}).$mount("#root");
