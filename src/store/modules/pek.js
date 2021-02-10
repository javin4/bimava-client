import axios from '@/axios.config.js'
//import myInterceptor from '@/axios.config.js'

const state = {
    pek: [
        { id: 1, name: "Fußboden 01", kennung:"FB01" },
        { id: 2, name: "Fußboden 02", kennung:"FB02"  },
        { id: 3, name: "Fußboden 03", kennung:"FB03"  }
    ],
    activePek: null,
}

const getters = {
    allPek: state => state.pek
}

const actions = {
    async fetchPek({commit}) {
        const response = await axios.get('/pelementtyps')
        console.log("fetching Pek")
        console.log(response.data)
        commit('setPek',response.data)
    },
}
/*
    async fetchLVsByProject({commit},project_id) {
        const response = await axios.get(`/lvs/${project_id}`)
        console.log("fetching LVs by Project", project_id)

        if (!response.data){
            response.data = []
        }
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

    async updateLV({ commit }, updLV) {
        const response = await axios.put(`/lv/${updLV.id}`,updLV);
        commit('editLV', response.data);
        console.log ('User XXX has updated LV:' , updLV.id)
    }
*/


const mutations  = {
    setPek: (state, pek) => (state.pek = pek),
}

/*
    newLV: (state, lv) => state.lvs.unshift(lv),
    removeLV: (state, id) => (state.lvs = state.lvs.filter(lv => lv.id !== id)),
    editLV: (state, updLV) => {
        const index = state.lvs.findIndex(lv => lv.id === updLV.id);
        if (index !== -1) {
        state.lvs.splice(index, 1, updLV);
        }
    }
*/

export default {
    state,
    getters,
    actions,
    mutations
}