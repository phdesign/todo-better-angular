const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.config.js');

module.exports = Object.assign({}, baseConfig, {
  target: 'node', // webpack should compile node compatible code
  externals: [nodeExternals()]
});
