/**
 * @file home store
 * @author dongkunshan(windwithfo@yeah.net)
 */

import {
  action,
  observable
} from 'mobx';

class HomeStore {
  constructor(root) {
    this.root = root;
  }

  text = 'home';
  @observable disabled: ''

  @action
  btnCtl = (flag = false) => {
    this.disabled = flag ? 'disabled' : '';
  }
}

export default HomeStore;
