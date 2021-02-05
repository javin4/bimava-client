import axios from 'axios'

const state = {
    projects: [
        { id: 1, name: "Project 1", kennung:"aaa" },
        { id: 2, name: "Project 2", kennung:"bbb"  },
        { id: 3, name: "Project 3", kennung:"ccc"  }
    ]
}

const getters = {
    allProjects: state => state.projects
}

const actions = {
    async fetchProjects({commit}) {
        const response = await axios.get('http://bimavarest.loc/api/projects')
        console.log("fetching projects")
        console.log(response.data)
        commit('setProjects',response.data)
    },

    async addProject({commit},project ){
        const response = await axios.post('http://bimavarest.loc/api/project',project)
        //console.log (response)
        commit('newProject',response.data)
    }

}

const mutations  = {
    setProjects: (state, projects) => (state.projects = projects),
    newProject: (state, project) => state.projects.unshift(project)
}

export default {
    state,
    getters,
    actions,
    mutations
}