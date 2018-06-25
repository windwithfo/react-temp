/**
 * @file page1 store
 * @author dongkunshan(windwithfo@yeah.net)
 */

import fetch from 'isomorphic-fetch';
import {
  action,
  observable,
  runInAction
} from 'mobx';

class Page1Store {
  constructor(root) {
    this.root = root;
  }

  text = 'Hello World!';
  @observable msg = 'init';

  @action.bound
  async fetchData() {
    let ret = {};
    try {
      ret = await fetch('/api/home.json')
        .then((response) => response.json());
      runInAction(() => {
        this.msg = ret.env;
      });
      return ret;
    }
    catch (error) {
      console.log(error);
    }
    return ret;
  }

  @action.bound
  async init() {
    let ret = {};
    try {
      ret = await fetch('/api/home.json')
        .then((response) => response.json());
      runInAction(() => {
        this.msg = ret.env;
      });
      return ret;
    }
    catch (error) {
      console.log(error);
    }
    return ret;
  }
}

export default Page1Store;
