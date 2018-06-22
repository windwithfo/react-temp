/**
 * @file 详情页
 * @author dongkunshan(windwithfo@yeah.net)
 */

import { handleActions, combineActions } from 'redux-actions';

const defaultState = {
  text: 'Hello World!',
  msg: 'init'
};

const reducer = handleActions({
  [combineActions('FETCH_DATA', 'INIT')]: (state, action) => {
    return { ...state, ...action.payload.data };
  }
}, defaultState);

export default reducer;
