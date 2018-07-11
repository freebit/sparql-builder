import Vue from "vue";
import Vuex from "vuex";

import qlModule from "./modules/queryBuilder";
import treeModule from "./modules/treeBuilder";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    qlModule,
    treeModule
  },
  state: {},
  mutations: {},
  actions: {}
});
