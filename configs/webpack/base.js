/**
 * @file 基础配置
 * @author dongkunshan(windwithfo@yeah.net)
 */

import path       from 'path';
import webpack    from 'webpack';
import config     from '../config';
import entry      from '../../src/entry';
import CopyPlugin from 'copy-webpack-plugin';
import Extract    from 'mini-css-extract-plugin';
import manifest   from '../../static/vendor-manifest';

const webpackConfig = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: {
          minChunks: 1,
          priority: -20,
          reuseExistingChunk: true,
        },
        style: {            
          name: 'style',
          test: /\.css/,
          chunks: 'all',
          minChunks: 1,
          enforce: true
        }
      }
    }
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../../'),
      path.resolve(__dirname, '../../node_modules')
    ],
    alias: {
      component: 'src/components',
      asset: 'src/assets',
      view: 'src/views'
    },
    extensions: ['.js', '.jsx', '.json', '.less', '.css']
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        use: {
          loader: 'babel',
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [Extract.loader, 'css']
      },
      {
        test: /\.less$/,
        use: [Extract.loader, 'css', 'less']
      },
      {
        test: /\.json$/,
        use: {
          loader: 'json'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url',
          options: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest
    }),
    new CopyPlugin([{
      from: path.resolve(__dirname, '../../static'),
      to: config.dev.assetsSubDirectory,
      ignore: ['.*']
    }]),
  ]
};

export default webpackConfig;
