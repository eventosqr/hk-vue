import components from './components';

const install = function (Vue) {
  for (const [name, component] of Object.entries(components)) {
    Vue.component(name, component);
  }
};

export default {
  install,
};
