<template>
    <div>
    <table>
      <tr>
        <td text-align="right">  
    <Label for="c1" align="top">Projekt: </Label>
    </td>
    <td ><ComboBox inputId="c1" v-model="currentProject" 
    valueField="id"
    textField=name 
    :data="projects">
            <template slot="item" slot-scope="scope">
                {{scope.row.kennung}} - {{scope.row.name}}
            </template>
    </ComboBox>
        <!--<div>Selected: {{currentProjectid}}</div>-->
    </td></tr></table>
      </div>
</template>
 
<script>
import gql from 'graphql-tag'
export default {
  data() {
    return {
      currentProject: null,
    };
  },
  methods: {
  },
      apollo:{
        projects: gql`{ 
            projects{
                id
                name
                kennung
            }
        }`,
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