<template>
        
              
    <ApolloQuery
        :query="require('@/graphql/project/all.gql')"
    >
      <template v-slot="{ result: { loading, error, data } }">
        <!-- Loading -->
        <div v-if="loading" class="loading apollo">Loading...</div>

        <!-- Error -->
        <div v-else-if="error" class="error apollo">An error occurred</div>

        <!-- Result -->
        <div v-else-if="data" class="result apollo">
        <ul>
            <li v-for="project of data.projects" :key="project.id">
            {{ project.name }}
            </li>
        </ul>    
        </div>

        <!-- No result -->
        <div v-else class="no-result apollo">No result :(</div>
      </template>
    </ApolloQuery>
       
</template>

<script>
export default {
    name:"test",
    data () {
        return
    },
    methods() {

    }
}
</script>

<style>

</style>