<template>
  <div class="home">
    <div class="container">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-3/4 px-4 mb-12">
          <div>
            <ApolloQuery :query="query" :variables="{ currentProjectid: currentProjectid }">
              <template slot-scope="{ result: { data, error }, isLoading }">
                <div v-if="isLoading">Loading...</div>
                <div v-else-if="error">error</div>
                <div v-else class="flex flex-wrap">
                  <!--{{data}}-->
                  <ul v-for="LV of data.currentProject.lvs" :key="LV.id" class="w-full lg:w-1/3 px-4 mb-12">
                    <li>{{LV.kennung}} - {{LV.name}} - {{LV.id}}</li>
                  </ul>
                </div>
              </template>
            </ApolloQuery>
          </div>
        </div>

      </div>
    </div> <!-- end container -->
  </div>
</template>

<script>
// @ is an alias to /src
import qGetCurrentProjects from '@/graphql/project/current.gql'

export default {
  name: 'home',

  data() {
    return {
      currentProjectid:'9a4208ba-27da-405c-b484-f386ba48f00b',
      query: qGetCurrentProjects,
    }
  },
}
</script>

<style>
  .link-margin {
    margin-right: 24px;
  }
</style>