import LwButton from './src/lw_button';

/* istanbul ignore next */
LwButton.install = function(Vue) {
  Vue.component(LwButton.name, LwButton);
};

export default LwButton;