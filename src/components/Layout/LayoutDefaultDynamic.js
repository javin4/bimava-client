// src/layouts/LayoutDefaultDynamic.js
import LayoutDefault from '@/components/Layout/Default.vue';

export default {
  name: 'LayoutDefaultDynamic',
  created() {
    this.$parent.$emit('update:layout', LayoutDefault);
  },
  render() {
    return this.$slots.default[0];
  },
};