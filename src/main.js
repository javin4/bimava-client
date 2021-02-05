import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vx-easyui/dist/themes/flow/easyui.css';
import 'vx-easyui/dist/themes/flow/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import EasyUI from 'vx-easyui';

Vue.use(EasyUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


