/**
 * @file 详情页
 * @author dongkunshan(windwithfo@yeah.net)
 */

import 'babel-polyfill';
import 'assets/style/common';
import React             from 'react';
import Routes            from './routes';
import ReactDom          from 'react-dom';
import reducers          from './reducers';
import { Provider }      from 'react-redux';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware }     from 'redux';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

let store = createStore(reducers, applyMiddleware(promiseMiddleware));

function Page() {
  const supportsHistory = 'pushState' in window.history;

  return (
    <Provider store={store}>
      <Router basename="/" forceRefresh={!supportsHistory}>
        <div className="nav">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/page1">
                Page1
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/page2/123">
                Page2
              </NavLink>
            </li>
          </ul>
          <Routes/>
        </div>
      </Router>
    </Provider>
  );
}

ReactDom.render(<Page/>, document.getElementById('root'));
