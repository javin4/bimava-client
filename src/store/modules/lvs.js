import axios from '@/axios.config.js'
import myInterceptor from '@/axios.config.js'



const state = {
    lvs: [
        { id: 1, name: "Baumeister", kennung:"BM" },
        { id: 2, name: "Trockenbau", kennung:"TB"  },
        { id: 3, name: "Fliesenleger", kennung:"FZ"  }
    ],
    activeLV: null,
}

const getters = {
    allLVs: state => state.lvs
}

const actions = {
    async fetchAllLVs({commit}) {
        const response = await axios.get('/lvs')
        console.log("fetching All LVs")
        console.log(response.data)
        commit('setLVs',response.data)
    },

    async fetchLVsByProject({commit},Project) {
        const response = await axios.post('/lvs',Project)
        console.log("fetching LVs by Project", Project)
        commit('setLVs',response.data)
    },

    async addLV({commit},lv ){
        console.log(lv.project_id);
        axios.interceptors.request.eject(myInterceptor);
    //    const response = await axios.post(`/lv/${lv.project_id}`, lv)
        const response = await axios.post(`/lv`, lv)
        .catch(error => { 
            console.log("ERRRR:: ",error.response.data);
        });
        commit('newLV',response.data)
        console.log ('User XXX has created LV:' ,response.data.id)
    },

    async deleteLV({ commit }, lvId) {
        await axios.delete(`/lv/${lvId}`)
        commit('removeLV', lvId);
        console.log ('User XXX has deleted LV:' ,lvId)
    },
}

const mutations  = {
    setLVs: (state, lvs) => (state.lvs = lvs),
    newLV: (state, lv) => state.lvs.unshift(lv),
    removeLV: (state, id) => (state.lvs = state.lvs.filter(lv => lv.id !== id)),
   
}


export default {
    state,
    getters,
    actions,
    mutations
}