// src/layouts/LayoutDefaultDynamic.js
import LayoutDefault2 from '@/components/Layout/Default2.vue';

export default {
  name: 'LayoutDefaultDynamic',
  created() {
    this.$parent.$emit('update:layout', LayoutDefault2);
  },
  render() {
    return this.$slots.default[0];
  },
};