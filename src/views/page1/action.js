/**
 * @file 详情页
 * @author dongkunshan(windwithfo@yeah.net)
 */

import { createActions } from 'redux-actions';
import fetch             from 'isomorphic-fetch';

const actions = createActions({
  'FETCH_DATA': async () => {
    const ret = await fetch('/api/home.json')
    .then((response) => response.json());
    return ret;
  },
  'INIT': async () => {
    const ret = await fetch('/api/page1.json')
    .then((response) => response.json());
    return ret;
  }
});

export default actions;
