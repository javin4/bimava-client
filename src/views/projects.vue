<template>
   <Layout style="width: 100%; height: 800px">
      <LayoutPanel region="east" title="Eigenschaften" :collapsible="true" :collapsed="true" :expander="true" style="width:350px;">
        <add-project/>
      </LayoutPanel>

      <LayoutPanel region="center" style="">
        <projects-grid />
      </LayoutPanel>

   </Layout>
</template>

<script>
import LayoutDefault from '@/components/layout/Default.vue';
import AddProject from '@/components/widgets/projects/AddProject.vue';
import ProjectsGrid from '@/components/widgets/projects/ProjectsGrid.vue';
//import LayoutDefaultDynamic from '../components/Layout/LayoutDefaultDynamic.js';

export default {
  components: { 
    ProjectsGrid,
    AddProject,
//    LayoutDefaultDynamic,
  },
  name: 'ProjectView',
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
};
</script>