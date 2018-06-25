/**
 * @file 部署配置
 * @author dongkunshan(windwithfo@yeah.net)
 */

import Chalk          from 'chalk';
import baseConfig     from './base';
import entry          from '../entry';
import config         from '../config';
import merge          from 'webpack-merge';
import Html           from 'html-webpack-plugin';
import UglifyJs       from 'uglifyjs-webpack-plugin';
import Extract        from 'mini-css-extract-plugin';
import ProgressBar    from 'progress-bar-webpack-plugin';
import FriendlyErrors from 'friendly-errors-webpack-plugin';
import CSSAssets      from 'optimize-css-assets-webpack-plugin';

const webpackConfig = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJs({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new CSSAssets({})
    ]
  },
  output: {
    path: config.output,
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
    publicPath: config.build.assetsPublicPath
  },
  performance: {
    hints: false
  },
  // 插件项
  plugins: [
    new FriendlyErrors(),
    new ProgressBar({
      complete: Chalk.green('█'),
      incomplete: Chalk.white('█'),
      format: '  :bar ' + Chalk.green.bold(':percent') + ' :msg',
      clear: false
    }),
    new Extract({
      filename: 'css/app.[name].css',
      chunkFilename: 'css/app.[contenthash:12].css'
    })
  ]
});

for (const page in entry) {
  webpackConfig.plugins.push(
    new Html({
      filename: page + '.html',
      template: 'index.html',
      inject: true,
      excludeChunks: Object.keys(entry).filter(function (item) {
        return (item !== page);
      }),
      chunksSortMode: 'dependency'
    })
  );
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin');

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' + config.build.productionGzipExtensions.join('|') + ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  );
}

export default webpackConfig;
