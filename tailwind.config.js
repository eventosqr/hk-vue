const tw = require('./src/assets/hk-tailwind.config.js');

module.exports = {
  ...tw,

  theme: {
    ...tw.theme,
    extend: {
      ...tw.theme.extend,
    },
  },

  purge: [],

  darkMode: false, // or 'media' or 'class'
};
