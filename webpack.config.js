import path from 'path';

export default {
  mode: 'production', //development
  entry: '/frontend/assets/js/main.js',
  output: {
    path: path.resolve('./public/assets/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }]
  },
  devtool: 'source-map'
}