import axios from '@/axios.config.js'

const state = {
    Bgls: [
        { id: 1, text: "Project 1", kennung:"0" },
        { id: 2, text: "Project 2", kennung:"1"  },
        { id: 3, text: "Project 3", kennung:"2"  }
    ]
}


const getters = {
    allBgls: state => state.Bgls,
}

const actions = {
    async fetchBgls({commit}) {
        const response = await axios.get('/bgls')
        commit('setBgls',response.data)
    },
/*
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
*/
}

const mutations  = {
    setBgls: (state, Bgls) => (state.Bgls = Bgls),
    //setActivePComponent:(state,PComponent) => (state.ActivePComponent = PComponent),
    //newPComponent: (state, PComponent) => state.PComponents.unshift(PComponent),
    //editPComponent: (state, upd) => state.PComponents.findIndex(PComponent => PComponent.id === upd.id),
    //removePComponent: (state, id) => (state.PComponents = state.PComponents.filter(PComponent => PComponent.id !== id)),
}

export default {
    state,
    getters,
    actions,
    mutations
}