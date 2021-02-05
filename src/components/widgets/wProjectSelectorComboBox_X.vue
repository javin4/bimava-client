<template>
  <div>
    <table>
      <tr>
        <td text-align="right"><Label for="c1" align="top">Projekt: </Label> </td>
        <td >
          <ComboBox inputId="c1" v-model="currentProjectId" 
              valueField="id"
              textField=name 
              :data="allProjects">
            <template slot="item" slot-scope="scope">
                {{scope.row.kennung}} - {{scope.row.name}}
            </template>
          </ComboBox>
        <!-- for debugging!
          <div>Selected: {{currentProjectid}}</div>
        -->
        </td>
      </tr>
    </table>
  </div>
</template>
 
<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        currentProjectId: 1,
      };
    },
    methods: {
          ...mapActions(['fetchProjects'])
      },
      computed: mapGetters(["allProjects"]),
      created() {
          this.fetchProjects();
      }
  };
</script>
<style scoped>
  .f-field {
      width: 100%;
      height: 30px;
      float:right;
  }
  table, tr {
    width:100%;
    background: #E0ECFF;
  }
</style>