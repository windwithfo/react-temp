/**
 * @file 详情页
 * @author dongkunshan(windwithfo@yeah.net)
 */

import React            from 'react';
import Loadable         from 'react-loadable';
import { Route }        from 'react-router-dom';
import LoadingComponent from 'component/Loader';

// loader 延迟显示时间
const delay = 200;

// 异步组件注册
const AsyncHome = Loadable({
  loader: () => import('view/home/home'),
  loading: LoadingComponent,
  delay
});

const AsyncPage1 = Loadable({
  loader: () => import('view/page1/page1'),
  loading: LoadingComponent,
  delay
});

const AsyncPage2 = Loadable({
  loader: () => import('view/page2/page2'),
  loading: LoadingComponent,
  delay
});

function Routes() {
  return (
    <div>
      <Route exact path="/" component={AsyncHome}/>
      <Route path="/page1" component={AsyncPage1}/>
      <Route path="/page2/:id?" component={AsyncPage2}/>
    </div>
  );
}

export default Routes;
