/**
 * @file entry
 * @author dongkunshan(windwithfo@yeah.net)
 */

import fs   from 'fs';
import path from 'path';

let pages = {
  index: 'view/index/index.jsx',
  page1: 'view/page1/page1.jsx',
  page2: 'view/page2/page2.jsx'
};

// auto get entry
function getEntry() {
  const entry = {
    index: '~/index.jsx'
  };
  const root = path.resolve(__dirname, '../src/views');
  const jsx = readDirSync(root);
  jsx.forEach((element) => {
    entry[path.parse(element).name] = element.replace('.html', '.jsx');
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
        if (path.extname(ele) === '.html') {
          jsx.push(path.resolve(root, ele));
        }
      }
  });
  return jsx;
}

pages = getEntry();


export default pages;