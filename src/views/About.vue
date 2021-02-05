<template>
  <div class="Home">
    <h1>About</h1>
    <!-- ... -->
  </div>
</template>

<script>
import LayoutDefault from '@/components/layout/Default.vue';

export default {
  name: 'AboutView',
  created() {
    this.$emit('update:layout', LayoutDefault);
  },
};
</script>