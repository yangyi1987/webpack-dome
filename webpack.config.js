"use strict"

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = {
  entry:  './src/main.js',
  output: {
    filename: 'js/[name][chunkhash].js',
    path: path.resolve(__dirname, './dist')
  },
  mode: 'production',
  // 优化
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    modules: ['node_modules'],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules|bower_components/,
        include: path.resolve(__dirname, './src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
            }
          }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new EslintWebpackPlugin(),
  ]
}
