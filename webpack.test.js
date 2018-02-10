const path = require('path');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.config.js');

module.exports = Object.assign({}, baseConfig, {
  entry: './test',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '.tmp')
  },
  target: 'node', // webpack should compile node compatible code
  externals: [nodeExternals()]
});
