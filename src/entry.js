/**
 * @file 入口配置
 * @author dongkunshan(windwithfo@yeah.net)
 */

import path from 'path';

function resolve(dir) {
  return path.join(__dirname, dir);
}

let pages = {
  // entry
  home: resolve('index.jsx')
};

let vendors = {
  vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux']
};

export default {
  pages,
  vendors
};
