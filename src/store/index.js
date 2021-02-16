import Vue from 'vue'
import Vuex from 'vuex'
import lvs from './modules/lvs';
import projects from './modules/projects';
import pphases from './modules/pphases';
import pek from './modules/pek';
import pcomponents from './modules/pcomponents';
import bgls from './modules/gl/bgls';


Vue.use(Vuex)

export default new Vuex.Store({
  /*state: {
  },
  mutations: {
  },
  actions: {
  },*/
  modules: {
    lvs,
    projects,
    pphases,
    pek,
    pcomponents,
    bgls
  }
})
