/**
 * @file 详情页
 * @author dongkunshan(windwithfo@yeah.net)
 */

import './style';
import React     from 'react';
import action    from './action';
import PropTypes from 'prop-types';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { store } = this.context;
    const state = store.getState().home;
    this.setState(state);
  }

  render() {
    const { store } = this.context;
    store.subscribe(() => {
      this.setState(store.getState().home);
    });
    const btnClick = () => {
      store.dispatch(action.btnControl('disabled'));
      setTimeout(() => {
        store.dispatch(action.btnControl(''));
      }, 5000);
    };
    return (
      <div className="home">
        <p className="title">Hello World!</p>
        <p>By Emiya</p>
        <p>page say: {this.state.text}</p>
        <button onClick={btnClick} disabled={this.state.disabled}>点我</button>
      </div>
    );
  }
}

Page.contextTypes = {
  store: PropTypes.object
};

export default Page;
