// src/layouts/LayoutDefaultDynamic.js
import LayoutDefault from '@/components/layout/Default.vue';

export default {
  name: 'LayoutDefaultDynamic',
  created() {
    this.$parent.$emit('update:layout', LayoutDefault);
  },
  render() {
    return this.$slots.default[0];
  },
};