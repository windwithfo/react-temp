/**
 * @file 详情页
 * @author dongkunshan(windwithfo@yeah.net)
 */
import React     from 'react';
import Home      from 'view/home/home';
import Page1     from 'view/page1/page1';
import Page2     from 'view/page2/page2';
import { Route } from 'react-router-dom';

// const Home = import('view/home/home');
// const Page1 = import('view/page1/page1');
// const Page2 = import('view/page2/page2');

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
