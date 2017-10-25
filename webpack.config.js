const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './dev/js/index.jsx',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'build/js/bundle.min.js',
  },
  devServer: {
    publicPath: '/',
    contentBase: './src',
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
