<template>
 <layout-default-dynamic-2>
  <div class="Home">
    <h1>Home</h1>
    <!-- ... -->
    Hallo
  </div>
   </layout-default-dynamic-2>
</template>

<script>
//import LayoutDefault2 from '../components/Layout/Default2.vue';
import LayoutDefaultDynamic2 from '@/components/layout/LayoutDefaultDynamic2.js';

export default {
  name: 'Home',
 /* created() {
    this.$emit('update:layout', LayoutDefault2);
  },*/
  components: {
    LayoutDefaultDynamic2,
  }
};
</script>