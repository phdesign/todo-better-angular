var path = require('path');
var srcPath = path.join(__dirname, '/src');

module.exports = {
  entry: './src/app.js',
  devtool: 'source-map',
  output: {
    filename: 'todos.min.js'
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          }
        ]
      },
      { 
        test: /\.html$/, 
        exclude: /index\.html$/, 
        use: ['ngtemplate-loader', 'html-loader'] 
      }
    ]
  },
  // This allows to simplify our include statements (e.g. require('components/todo-list') everywhere in the tree).
  resolve: {
    alias: {
      components: srcPath + '/components/',
      services: srcPath + '/services/',
      styles: srcPath + '/styles/'
    }
  },
}
