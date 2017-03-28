var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var webpack = require('webpack') // 模块自动加载用

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: utils.entries(), // 更改入口文件
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  plugins: [ // 模块的自动加载配置 不用import
    new webpack.ProvidePlugin({
      Vue: 'vue',
      Resource: 'vue-resource',
      Router: 'vue-router',  // 版本问题 换成2.2.x
      // Router: 'vue-router/dist/vue-router.common.js',
      Vuex: 'vuex',
      Axios: 'axios'
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js', // 模块的配置, 用了ES6换commonjs规范
      'vue$': 'vue/dist/vue.common.js',
      '@': resolve('src'), // 路径的配置
      'components': '@/components',
      'pages': '@/pages',
      'js': '@/modules/js',
      'css': '@/modules/css',
      'sass': '@/modules/sass',
      'imgs': '@/modules/imgs'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
