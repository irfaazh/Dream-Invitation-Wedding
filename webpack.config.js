const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new (require('html-webpack-plugin'))({
      template: './src/index.html'
    })
  ]
};
