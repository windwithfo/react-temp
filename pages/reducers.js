import { combineReducers } from 'redux';
import home                from './home/reducer';
import page1               from './page1/reducer';
// reducer

const reducers = combineReducers({
  home,
  page1
});

export default reducers;
