/**
 * @file store
 * @author dongkunshan(windwithfo@yeah.net)
 */

import {
  action,
  configure,
  observable
} from 'mobx';

configure({ enforceActions: true });

class appStore {
  text = 'home';
  @observable disabled: ''

  @action
  btnCtl = (flag = false) => {
    this.disabled = flag ? 'disabled' : '';
  }
};

const store = new appStore();

export default store;
