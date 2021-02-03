<template>
  <div class="create">
      <div class="create container mt-12">
    <h1 class="mb-4">Neues Projekt Anlegen</h1>
    <form action="#" method="POST" @submit.prevent="addProject">
      <div class="form-group">
        <label class="font-bold mb-2" for="name">Title</label>
        <input type="text" name="name" id="name" v-model="name">
      </div>
      <div class="form-group">
        <label class="font-bold mb-2" for="kennung">Kennung</label>
        <input type="text" name="kennung" id="kennung" v-model="kennung">
      </div>
      <!--
      <div class="form-group">
        <label class="font-bold mb-2" for="description">Description</label>
        <textarea name="description" id="description" cols="30" rows="10" v-model="description"></textarea>
      </div>
      <div class="form-group">
        <ApolloQuery :query="require('@/graphql/project/all.gql')">
          <template slot-scope="{ result: { data, loading }, isLoading }">
            <div v-if="isLoading">Loading...</div>
            <select v-else v-model="category">
              <option v-for="project of data.projects" :key="project.id" :value="project.id">
                {{ project.name }}
              </option>
            </select>
          </template>
        </ApolloQuery>
      </div>
        -->
      <div class="form-group">
        <button type="submit">Add Project</button>
      </div>

    </form>
  </div>

  </div>
</template>
<script>
import addProject from '@/graphql/project/create.gql'

export default {
  data() {
    return {
      name: '',
      kennung: '',
    }
  },
  methods: {
    addProject() {
      this.$apollo.mutate({
        // Query
        mutation: addProject,
        // Parameters
        variables: {
          name: this.name,
          kennung: this.kennung,
        }
      }).then((data) => {
        console.log(data)
//        this.$router.push('/project')
      }).catch((error) => {
        console.error(error)
      })
    }
  }
}
</script>

<style scoped>
  .form-group {
    margin-bottom: 10px;
    margin-left: 10px;
  }
  input[type="text"], textarea {
    padding: 2px 2px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
  label {
    display: block;
  }
  button {
    padding: 16px;
    background: #027BFF;
    color: white;
    border-radius: 5px;
    font-size: 16px;
  }
</style>