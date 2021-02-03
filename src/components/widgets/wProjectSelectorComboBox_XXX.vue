<template>
    <div>
    <select v-model="currentProject">    
       <option v-for="project in projects" :key="project.id" v-bind:value="project">
        {{project.kennung}}  {{project.name}}
       </option>
    </select>
    <div>Selected: {{currentProject}}</div>
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
</style>