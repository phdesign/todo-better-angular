var path = require('path');
var srcPath = path.join(__dirname, '/src');

module.exports = {
  entry: './src/app.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'todos.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true
        }
      },
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
      filters: srcPath + '/filters/',
      models: srcPath + '/models/',
      services: srcPath + '/services/',
      styles: srcPath + '/styles/'
    }
  },
}
