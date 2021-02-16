import axios from '@/axios.config.js'

const state = {
    PComponents: [
        { id: 1, name: "Project 1", kennung:"aaa" },
        { id: 2, name: "Project 2", kennung:"bbb"  },
        { id: 3, name: "Project 3", kennung:"ccc"  }
    ],
    ActivePComponent:
        { id: "1", name: "test", kennung:"test" }
    
}


const getters = {
    allPComponents: state => state.PComponents,
    ActivePComponent: state => state.ActivePComponent
}


const actions = {
    async fetchPComponents({commit}) {
        const response = await axios.get('/PComponents')
        console.log("fetching PComponents")
        console.log(response.data)
        commit('setPComponents',response.data)
    },

    async fetchPComponent({commit},id) {
        const response = await axios.get(`/PComponent/${id}`)
        commit('setActivePComponent',response.data)
        console.log ('User XXX works on PComponent:' ,id)
    },

    async addPComponent({commit},id ){
        const response = await axios.post('/PComponent', id)
        .catch(error => { 
            console.log("ERRRR:: ",error.response.data);
        });
        commit('newPComponent',response.data)
        console.log ('User XXX has created PComponent:' ,response.data.id)
    },

    async ChangePComponentBgl({commit},[PComponentID, BglID]){

        const response = await axios.put(`/PComponent/${PComponentID}/Bgl/${BglID}`)
        .catch(error => { 
            console.log("ERRRR:: ",error.response.data);
        });
        commit('setActivePComponent',response.data)
        console.log(`User xxx changed Bgl :  ${BglID} in PComponent: ${PComponentID}`)
    },


    async updatePComponent({ commit }, upd) {
        const response = await axios.put(`/PComponent/${upd.id}`,upd);
        commit('editPComponent', response.data);
        console.log ('User XXX has updated PComponent:' , upd.id)
    },

    async deletePComponent({ commit }, id) {
        await axios.delete(`/PComponent/${id}`)
        commit('removePComponent', id);
        console.log ('User XXX has deleted PComponent:' ,id)
    }
}

const mutations  = {
    setPComponents: (state, PComponents) => (state.PComponents = PComponents),
    setActivePComponent:(state,PComponent) => (state.ActivePComponent = PComponent),
    newPComponent: (state, PComponent) => state.PComponents.unshift(PComponent),
    editPComponent: (state, upd) => state.PComponents.findIndex(PComponent => PComponent.id === upd.id),
    removePComponent: (state, id) => (state.PComponents = state.PComponents.filter(PComponent => PComponent.id !== id)),
}

export default {
    state,
    getters,
    actions,
    mutations
}