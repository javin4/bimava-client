import Vue from 'vue'
import Vuex from 'vuex'
import lvs from './modules/lvs';
import projects from './modules/projects';


Vue.use(Vuex)

export default new Vuex.Store({
  /*state: {
  },
  mutations: {
  },
  actions: {
  },*/
  modules: {
    projects,
    lvs
  }
})
