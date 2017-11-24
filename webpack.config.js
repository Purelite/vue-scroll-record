/**
 * 
 * @authors purelite (zhuweilei@weidian.com)
 * @date    2017-11-23 16:26:06
 * @version $Id$
 */

'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  devServer:{
    port: 8888,
    https: false,
    hot: true,
    disableHostCheck: true,
    compress: true,
  },
  entry: {
    [`example/js/vendor`]: ['es6-promise/auto','vue', 'vue-router'],
    [`example/js/index`]: path.resolve(__dirname, './example/index.js')
  },
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: '[name].[hash:8].js',
    chunkFilename: 'example/js/[name].[hash:8].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loaders: [{
          loader: 'vue-loader',
          options: {
            postcss: [autoprefixer({browsers: ['> 1%', 'ie >= 9', 'iOS >= 6', 'Android >= 2.1']})]
          }
        }]
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader: 'css-loader'})
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(`created ${new Date().toLocaleString()}`),
    new webpack.optimize.CommonsChunkPlugin({
      name: `example/js/vendor`,
      filename: `example/js/vendor.[hash:8].js`,
    }),
    new HtmlwebpackPlugin({
      template: path.resolve(__dirname, './example/index.html'),
      filename: 'index.html',
      chunks: 'index.js',
      chunksSortMode: 'dependency',
      inject: 'body'
    }),
    new ExtractTextPlugin('example/css/app.css'),
    new webpack.HotModuleReplacementPlugin()
  ]
}
