import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import 'vx-easyui/dist/themes/flow/easyui.css';
//import 'vx-easyui/dist/themes/flow/icon.css';
import '@/assets/vx-easyui/flow/easyui.css';
import '@/assets/vx-easyui/flow/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import EasyUI from 'vx-easyui';

Vue.use(EasyUI);

Array.prototype.move = function(from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
  return this;
};


Vue.filter('toEUR', function (value) {
  /*if (typeof value !== "number") {
      return value;
  }*/
  var formatter = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2
  });
  return formatter.format(value);
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


