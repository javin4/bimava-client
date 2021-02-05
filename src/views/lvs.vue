<template>
   
   <Layout style="width: 100%; height: 800px">
      <LayoutPanel region="east" title="Eigenschaften" :collapsible="true" :collapsed="true" :expander="true" style="width:350px;">
        East
      </LayoutPanel>

      <LayoutPanel region="center" style="">
        <lvs-grid />
      </LayoutPanel>

   </Layout>
</template>

<script>
import LayoutDefault from '@/components/layout/Default.vue';
import LvsGrid from '@/components/widgets/lvs/LvsGrid.vue';

export default {
  components: { 
    LvsGrid,
  },
  name: 'lvs',
  created() {
    this.$emit('update:layout', LayoutDefault);
  },

};
</script>