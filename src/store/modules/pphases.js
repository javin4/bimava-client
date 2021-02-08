import axios from '@/axios.config.js'
//import myInterceptor from '@/axios.config.js'



const state = {
    pphases: [
        { id: 1, kennung:"1", name: "Grundlagenanalyse" },
        { id: 2, kennung:"2", name: "Vorentwurf"},
        { id: 3, kennung:"3", name: "Entwurfsplanung"},
        { id: 4, kennung:"4", name: "Einreichplanung" },
        { id: 5, kennung:"5", name: "Ausführungsplanung"},
       /*
        { id: 6, kennung:"6", name: "Ausschreibung"},
        { id: 7, kennung:"6-", name: "Mitwirkung bei Vergabe" },
        { id: 8, kennung:"7", name: "Bauausführung" },
        { id: 9, kennung:"8", name: "Örtliche Bauaufsicht"},
        { id: 10, kennung:"9", name: "Objektbetreuung"}*/
    ],
    activePPhase: null,
}

const getters = {
    allPPhases: state => state.pphases
}

const actions = {
    async fetchPPhases({commit},root_id) {
        const response = await axios.get(`/pphases/${root_id}`)
        console.log("fetching All PPhases")
        console.log(response.data)
        commit('setPPhases',response.data)
    },
}
const mutations = {
    setPPhases: (state, pphases) => (state.pphases = pphases),
}

export default {
    state,
    getters,
    actions,
    mutations
}