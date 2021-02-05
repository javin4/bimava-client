import axios from '@/axios.config.js'

const state = {
    lvs: [
        { id: 1, name: "Baumeister", kennung:"BM" },
        { id: 2, name: "Trockenbau", kennung:"TB"  },
        { id: 3, name: "Fliesenleger", kennung:"FZ"  }
    ],
    activeLV: []
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
}

const mutations  = {
    setLVs: (state, lvs) => (state.lvs = lvs),
}


export default {
    state,
    getters,
    actions,
    mutations
}