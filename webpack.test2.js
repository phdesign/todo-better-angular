var path = require('path');
const baseConfig = require('./webpack.config.js');

module.exports = Object.assign({}, baseConfig, {
  entry: './test',
  target: 'node',
  output: {
    filename: 'tests.js',
    path: path.join(__dirname, 'test/.webpack')
  },
  externals: {
    angular: 'angular',
    inject: 'inject'
  }
});

