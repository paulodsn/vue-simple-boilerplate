import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './scss/main.scss';

Vue.use(router);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
