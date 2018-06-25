/**
 * @file store
 * @author dongkunshan(windwithfo@yeah.net)
 */

import HomeStore  from 'view/home/store';
import Page1Store from 'view/page1/store';

import {
  computed,
  configure,
  observable
} from 'mobx';

configure({ enforceActions: true });

class appStore {
  constructor() {
    this.home = new HomeStore(this);
    this.page1 = new Page1Store(this);
  }
};

const store = new appStore();

export default store;
