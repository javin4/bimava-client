import axios from 'axios'

const state = {
    projects: [
        { id: 1, name: "Project 1", kennung:"aaa" },
        { id: 2, name: "Project 2", kennung:"bbb"  },
        { id: 3, name: "Project 3", kennung:"ccc"  }
    ],
    activeProject: [
        { id: 1, name: "Project 1", kennung:"aaa" },
    ]
}

const getters = {
    allProjects: state => state.projects,
    activeProject: state => state.activeProject,
}

const actions = {
    async fetchProjects({commit}) {
        const response = await axios.get('http://bimavarest.loc/api/projects')
        console.log("fetching projects")
        console.log(response.data)
        commit('setProjects',response.data)
    },

    async fetchActiveProject({commit},projectId) {
        const response = await axios.get(`http://bimavarest.loc/api/project/${projectId}`)
        commit('setActiveProject',response.data)
        console.log ('User XXX works on project:' ,projectId)
    },

    async addProject({commit},project ){
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
          };

        const response = await axios.post('http://bimavarest.loc/api/project',project,axiosConfig)
        .catch(error => { 
            console.log("ERRRR:: ",error.response.data);
        });
        commit('newProject',response.data)
        console.log ('User XXX has created project:' ,response.data.id)
    },

    async deleteProject({ commit }, projectId) {
        await axios.delete(`http://bimavarest.loc/api/project/${projectId}`)
        commit('removeProject', projectId);
        console.log ('User XXX has deleted project:' ,projectId)
      },

}

const mutations  = {
    setProjects: (state, projects) => (state.projects = projects),
    setActiveProject:(state, project) => (state.activeProject = project),
    newProject: (state, project) => state.projects.unshift(project),
    removeProject: (state, id) => (state.projects = state.projects.filter(project => project.id !== id)),
}

export default {
    state,
    getters,
    actions,
    mutations
}