/**
 * @file 详情页
 * @author dongkunshan(windwithfo@yeah.net)
 */

import React       from 'react';
import action      from './action';
import { connect } from 'react-redux';

class Page extends React.Component {
  render() {
    const { text, disabled, btnClick } = this.props;
    return (
      <div className="home">
        <p className="title">Hello World!</p>
        <p>By Emiya</p>
        <p>page say: {text}</p>
        <button onClick={btnClick} disabled={disabled}>点我</button>

        <style jsx>{`
          .title {
            color: #0ff;
          }
        `}</style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.home.text,
    disabled: state.home.disabled
  };
}

function mapDispatchToProps(dispatch) {
  return {
    btnClick: () => {
      dispatch(action.btnControl('disabled'));
      setTimeout(() => {
        dispatch(action.btnControl(''));
      }, 5000);
    }
  };
}

const WarpPage = connect(mapStateToProps, mapDispatchToProps)(Page);

export default WarpPage;
