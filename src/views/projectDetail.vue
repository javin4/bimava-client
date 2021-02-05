<template>
    <div>
    <Panel title="Projekt Daten" :bodyStyle="{padding:'20px'}" style="height:100em">
      <p>Panel Content.</p>
    </Panel>
    <h2>Projekt Daten</h2>
    </div>
</template>

<script>
import LayoutDefault from '@/components/layout/Default.vue';
export default {
  name: 'ProjectDetailView',
  components: { 

  },

  created() {
    this.$emit('update:layout', LayoutDefault);
  },
};
</script>

<style>

</style>