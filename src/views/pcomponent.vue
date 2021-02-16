<template>
   <Layout style="width: 100%; height: 800px">
      <LayoutPanel region="east" title="Eigenschaften" :collapsible="true" :collapsed="false" :expander="true" style="width:500px;">
                       

      <p-component-properties/>
      </LayoutPanel>

      <LayoutPanel title="Komponenten Katalog" region="center" style="">
        <p-component-grid />
      </LayoutPanel>

   </Layout>
</template>

<script>
import LayoutDefault from '@/components/layout/Default.vue';
import PComponentProperties from '@/components/widgets/pcomponent/PComponentProperties.vue';
import PComponentGrid from '../components/widgets/pcomponent/PComponentGrid.vue';
//import LayoutDefaultDynamic from '../components/Layout/LayoutDefaultDynamic.js';

export default {
  name: 'ProjectsView',
  components: { 
    PComponentProperties,
    PComponentGrid,
//    LayoutDefaultDynamic,
  },

  created() {
    this.$emit('update:layout', LayoutDefault);
  },
};
</script>