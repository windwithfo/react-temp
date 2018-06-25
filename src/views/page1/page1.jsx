/**
 * @file 第一页
 * @author dongkunshan(windwithfo@yeah.net)
 */

import React from 'react';
import {
  inject,
  observer
} from 'mobx-react';

@inject('page1')
@observer
class Page extends React.Component {
  componentDidMount() {
    const { init } = this.props.page1;
    setTimeout(init, 2000);
  }

  render() {
    const { text, msg } = this.props.page1;

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

export default Page;
