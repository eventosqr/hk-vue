// module.js
const { resolve, join } = require('path');
const { readdirSync } = require('fs');

module.exports = function hkNuxt(moduleOptions) {
  if (this.options.build.ssr) {
    this.options.build.transpile.push(/^hk-vue/);
  }

  const options = {
    ...moduleOptions,
    ...this.options.hk,
  };

  if (!options.namespace) options.namespace = 'hk';
  const { namespace } = options;

  const foldersToSync = [
    {
      from: '../src/store/modules',
      to: 'store/modules',
    },
  ];
  for (const pathString of foldersToSync) {
    const path = resolve(__dirname, pathString.from);
    for (const file of readdirSync(path)) {
      this.addTemplate({
        src: resolve(path, file),
        fileName: join(namespace, pathString.to, file),
        options,
      });
    }
  }

  if (options.registerStoreModules) {
    this.addPlugin({
      src: resolve(__dirname, 'store/index.js'),
      fileName: join(namespace, 'store/index.js'),
      options,
    });
  }

  const pluginsToSync = ['plugin.js'];
  for (const pathString of pluginsToSync) {
    this.addPlugin({
      src: resolve(__dirname, pathString),
      fileName: join(namespace, pathString),
      options,
    });
  }
};

module.exports.meta = require('../package.json');
