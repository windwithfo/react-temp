/**
 * @file 详情页
 * @author dongkunshan(windwithfo@yeah.net)
 */
import React     from 'react';
import Home      from 'page/home/home';
import Page1     from 'page/page1/page1';
import Page2     from 'page/page2/page2';
import { Route } from 'react-router-dom';

function Routes() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2/:id?" component={Page2}/>
    </div>
  );
}

export default Routes;
