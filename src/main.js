import Vue from 'vue'
import App from './App.vue'



import button from './plugin/button/index.js';

Vue.use(button);

new Vue({
  el: '#app',
  render: h => h(App)
})
