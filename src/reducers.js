import { combineReducers } from 'redux';
import home                from 'view/home/reducer';
import page1               from 'view/page1/reducer';
// reducer

const reducers = combineReducers({
  home,
  page1
});

export default reducers;
