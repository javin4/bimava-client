<template>
   
   <Layout style="width: 100%; height: 800px">
      <LayoutPanel region="east" title="Eigenschaften" :collapsible="true" :collapsed="true" :expander="true" style="width:350px;">
        <add-item/>
      </LayoutPanel>

      <LayoutPanel region="center" style="">
        <lv-grid />
       {{ todoItems }}
      </LayoutPanel>

   </Layout>
</template>

<script>
import LayoutDefault from '@/components/layout/Default.vue';
import AddItem from '@/components/widgets/AddItem.vue';
import LvGrid from '@/components/widgets/LvGrid.vue';
import { todoItemsQuery } from "@/graphql/queries.js"

export default {
  components: { 
    LvGrid,
    AddItem,
  },
  name: 'ProjectView',
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
    apollo: {
    todoItems: {
      query: todoItemsQuery
    }
  },

};
</script>