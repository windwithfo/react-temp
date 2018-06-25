/**
 * @file 首页
 * @author dongkunshan(windwithfo@yeah.net)
 */

import React from 'react';
import {
  inject,
  observer
} from 'mobx-react';

import {
  DatePicker
} from 'axxd';

@inject('home')
@observer
class Page extends React.Component {
  render() {
    const { text, disabled, btnCtl } = this.props.home;
    const btnClick = () => {
      btnCtl(true);
      setTimeout(() => {
        btnCtl();
      }, 3000);
    };
    return (
      <div className="home">
        <p className="title">Hello World!</p>
        <p>By Emiya</p>
        <p>page say: {text}</p>
        <button onClick={btnClick} disabled={disabled}>点我禁用3秒</button>
        <br/>
        <DatePicker/>

        <style jsx>{`
          .title {
            color: #0ff;
          }
        `}</style>
      </div>
    );
  }
}

export default Page;
