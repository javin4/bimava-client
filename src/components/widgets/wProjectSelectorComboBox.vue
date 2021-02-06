<template>
  <div>
    <table>
      <tr>
        <td text-align="right"><Label for="c1" align="top">Projekt: </Label> </td>
        <td >
          <select v-model="currentProjectId" @change="onChange($event)">    
              <option v-for="project in allProjects" :key="project.id" v-bind:value="project.id">
              {{project.kennung}}  {{project.name}}
              </option>
          </select>
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
        testvar: 1,
      };
    },
    methods: {
      ...mapActions(['fetchProjects','changeActiveProjectId']),
      onChange:function(event){
        //console.log(event.target.value);
        //this.fetchActiveProject(event.target.value);
        this.changeActiveProjectId(event.target.value);
      }
    },
    computed: mapGetters(["allProjects"]),
    created() {
        this.fetchProjects();
    }
  };
</script>
<style scoped>
  select {
    font-size: 14px;
    padding: 0 4px;
    border-radius: 5px 5px 5px 5px;
    height: 28px;
    line-height: 28px;
  }
  
  .combo-arrow {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAALklEQVR42mNgGAXUBcbGxv9BmFx5uAJsivDJEVRItGZsGkjWjMsQmgTqKKASAADJyyyhLrHD5wAAAABJRU5ErkJggg==) no-repeat center center;
  }

  td select {
    width:100%;
  }

  table, tr {
    width:100%;
    background: #E0ECFF;
  }
</style>