import Vue from 'vue'
import App from './App.vue'



import button from './plugin/button/index.js';
Vue.use(button);

import hchart from './plugin/highcharts/index.js';
Vue.use(hchart);


new Vue({
  el: '#app',
  render: h => h(App)
})
