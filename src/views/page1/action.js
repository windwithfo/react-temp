/**
 * @file 详情页
 * @author dongkunshan(windwithfo@yeah.net)
 */

import { createActions } from 'redux-actions';
import fetch             from 'isomorphic-fetch';

const actions = createActions({
  'FETCH_DATA': async () => {
    let ret = {};
    try {
      ret = await fetch('/api/home.json')
        .then((response) => response.json());
      return ret;
    }
    catch (error) {
      console.log(error);
    }
    return ret;
  },
  'INIT': async () => {
    let ret = {};
    try {
      ret = await fetch('/api/page1.json')
        .then((response) => response.json());
      ret.msg = ret.env;
      return ret;
    }
    catch (error) {
      console.log(error);
    }
    return ret;
  }
});

export default actions;
