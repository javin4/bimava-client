<template>
   <Layout style="width: 100%; height: 800px">
      <LayoutPanel region="east" title="Eigenschaften" :collapsible="true" :collapsed="true" :expander="true" style="width:350px;">
        adasdasd
      </LayoutPanel>

      <LayoutPanel title="Projekt Übersicht" region="center" style="">
        <bgl-tree/>
      </LayoutPanel>

   </Layout>
</template>

<script>
import LayoutDefault from '@/components/layout/Default.vue';


import BglTree from '@/components/widgets/bgl/bglTree.vue';

export default {
  name: 'ProjectsView',
  components: { 

    BglTree,
  },

  created() {
    this.$emit('update:layout', LayoutDefault);
  },
};
</script>