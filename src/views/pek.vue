<template>
   <Layout style="width: 100%; height: 800px">
      <LayoutPanel region="east" title="Eigenschaften" :collapsible="true" :collapsed="true" :expander="true" style="width:350px;">
        <add-project/>
      </LayoutPanel>

      <LayoutPanel title="Projekt Übersicht" region="center" style="">
        <pek-grid />
      </LayoutPanel>

   </Layout>
</template>

<script>
import LayoutDefault from '@/components/layout/Default.vue';
import AddProject from '@/components/widgets/projects/AddProject.vue';
import PekGrid from '../components/widgets/elements/PekGrid.vue';

export default {
  name: 'PekView',
  components: { 
    PekGrid,
    AddProject,
  },

  created() {
    this.$emit('update:layout', LayoutDefault);
  },
};
</script>