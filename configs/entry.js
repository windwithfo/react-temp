/**
 * @file entry
 * @author dongkunshan(windwithfo@yeah.net)
 */

import fs   from 'fs';
import path from 'path';

const pages = {
  index: '~/index.jsx',
  page1: 'view/page1/page1.jsx',
  page2: 'view/page2/page2.jsx'
};

// auto get entry
function getEntry() {
  const entry = {
    index: '~/index.jsx'
  };
  const root = path.resolve(__dirname, './views');
  const jsx = readDirSync(root);
  jsx.forEach((element) => {
    entry[path.parse(element).name] = element;
  });
  return entry;
}

// find .jsx in folder
function readDirSync(root) {
  const files = fs.readdirSync(root);
  let jsx = [];
  files.forEach(function(ele, index) {
      const info = fs.statSync(root + '/' + ele);
      if(info.isDirectory()) {
        jsx = jsx.concat(readDirSync(root + '/' + ele));
      }
      else {
        if (path.extname(ele) === '.jsx') {
          jsx.push(path.resolve(root, ele));
        }
      }
  });
  return jsx;
}

export default pages;