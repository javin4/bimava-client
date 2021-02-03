<template>
   
   <Layout style="width: 100%; height: 800px">
      <LayoutPanel region="east" title="Eigenschaften" :collapsible="true" :collapsed="true" :expander="true" style="width:350px;">
        <add-project/>
      </LayoutPanel>

      <LayoutPanel region="center" style="">
        <lv-grid />
     
      </LayoutPanel>

   </Layout>
</template>

<script>
import LayoutDefault from '../components/Layout/Default.vue';
import AddProject from '../components/widgets/AddProject.vue';
import LvGrid from '../components/widgets/LvGrid.vue';
//import LayoutDefaultDynamic from '../components/Layout/LayoutDefaultDynamic.js';

export default {
  components: { 
    LvGrid,
    AddProject,
//    LayoutDefaultDynamic,
  },
  name: 'ProjectView',
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
};
</script>