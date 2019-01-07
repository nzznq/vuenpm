import Hchart from './chart/chart';

/* istanbul ignore next */
Hchart.install = function(Vue) {
  Vue.component(Hchart.name, Hchart);
};

export default Hchart;