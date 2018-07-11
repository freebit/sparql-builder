import Vue from "vue";
import Root from "./Root.vue";
import router from "./router";
import store from "./store";
import { installBus } from "./utils/eventBus";

Vue.config.productionTip = false;

Vue.use(installBus);

new Vue({
  router,
  store,
  render: h => h(Root)
}).$mount("#root");
