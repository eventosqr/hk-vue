import Vue from 'vue';
import Vuex from 'vuex';
import HkAppState from './modules/hkAppState';
import HkLayoutState from './modules/hkLayoutState';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app: HkAppState,
    layout: HkLayoutState,
  },
});
