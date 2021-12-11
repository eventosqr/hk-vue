import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './assets/tailwind.css';
import HkVue from './index';
import store from './store';

Vue.config.productionTip = false;

Vue.use(HkVue);

new Vue({
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
