const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

config = {
  entry: './src/index.js',
  output: {
    filename:"bundle.js",
    path: path.resolve(__dirname, 'build')
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Personal Arnie API"
  })],
  devtool: 'source-map'
}

module.exports = config;