import axios from '@/axios.config.js'

const state = {
    projects: [
        { id: 1, name: "Project 1", kennung:"aaa" },
        { id: 2, name: "Project 2", kennung:"bbb"  },
        { id: 3, name: "Project 3", kennung:"ccc"  }
    ],
    //activeProject: [],
    activeProjectid: "1"
}

const getters = {
    allProjects: state => state.projects,
    //activeProject: state => state.activeProject,
    activeProjectid: state => state.activeProjectid,
}

const actions = {
    async fetchProjects({commit}) {
        const response = await axios.get('/projects')
        console.log("fetching projects")
        console.log(response.data)
        commit('setProjects',response.data)
    },

    async fetchOneProject({commit},projectId) {
        const response = await axios.get(`/project/${projectId}`)
        commit('setActiveProject',response.data)
        console.log ('User XXX works on project:' ,projectId)
    },

    changeActiveProjectId({commit},projectId) {
        commit('setActiveProjectId',projectId)
    },

    async addProject({commit},project ){
        const response = await axios.post('/project', project)
        .catch(error => { 
            console.log("ERRRR:: ",error.response.data);
        });
        commit('newProject',response.data)
        console.log ('User XXX has created project:' ,response.data.id)
    },

    async deleteProject({ commit }, projectId) {
        await axios.delete(`/project/${projectId}`)
        commit('removeProject', projectId);
        console.log ('User XXX has deleted project:' ,projectId)
    },
    
    async updateProject({ commit }, updProject) {
        const response = await axios.put(`/project/${updProject.id}`,updProject);
        commit('editProject', response.data);
        console.log ('User XXX has deleted project:' ,updProject.id)
    }

}

const mutations  = {
    setProjects: (state, projects) => (state.projects = projects),
    //setActiveProject:(state, project) => (state.activeProject = project),
    setActiveProjectId:(state,projectId) => (state.activeProjectid = projectId),
    newProject: (state, project) => state.projects.unshift(project),
    removeProject: (state, id) => (state.projects = state.projects.filter(project => project.id !== id)),
    editProject: (state, updProject) => {
        const index = state.projects.findIndex(project => project.id === updProject.id);
        if (index !== -1) {
          state.projects.splice(index, 1, updProject);
        }
      }
}

export default {
    state,
    getters,
    actions,
    mutations
}