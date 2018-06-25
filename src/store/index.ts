import Vue from "vue";
import Vuex from "vuex";

import qlModule from "./modules/queryBuilder";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    qlModule
  },
  state: {},
  mutations: {},
  actions: {}
});
