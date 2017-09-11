/**
 * @file 配置文件
 * @author dongkunshan(windwithfo@yeah.net)
 */

import path from 'path';

const config = {
  output: path.resolve(__dirname, '../build'),
  dev: {
    context: path.join(__dirname, '../'),
    publicPath: '/'
  },
  build: {
    publicPath: '/'
  },
  port: 3002
};

export default config;
