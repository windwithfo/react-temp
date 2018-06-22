/**
 * @file 详情页
 * @author dongkunshan(windwithfo@yeah.net)
 */

import React       from 'react';
import action      from './action';
import { connect } from 'react-redux';

class Page extends React.Component {
  componentDidMount() {
    const { init } = this.props;
    setTimeout(init, 2000);
  }

  render() {
    const { text, msg } = this.props;

    return (
      <div className="page1">
        <p className="title">{text}</p>
        <p>By Emiya</p>
        <p>page say: {msg}</p>

        <style jsx>{`
          .title {
            color: #f0f;
          }
        `}</style>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    text: state.page1.text,
    msg: state.page1.msg
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init: () => {
      dispatch(action.init());
    }
  };
}

const WarpPage = connect(mapStateToProps, mapDispatchToProps)(Page);

export default WarpPage;
