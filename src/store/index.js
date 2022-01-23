import Vue from "vue";
import Vuex from "vuex";

import delivrPackages from "./module/delivrPackages/delivrPackages";
import modal from "./module/modal/modal";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { delivrPackages, modal },
});
