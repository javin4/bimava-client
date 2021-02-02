<template>
  <div class="Home">
    <h1>Projekte</h1>
    <project-grid />
  </div>
</template>

<script>
import LayoutDefault from '../components/Layout/Default.vue';
import ProjectGrid from '../components/widgets/ProjectGrid.vue';

export default {
  components: { ProjectGrid },
  name: 'ProjectView',
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
};
</script>