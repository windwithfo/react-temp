/**
 * @file 详情页
 * @author dongkunshan(windwithfo@yeah.net)
 */

import 'babel-polyfill';
import 'asset/style/common';
import React        from 'react';
import store        from './store';
import Routes       from './routes';
import ReactDom     from 'react-dom';
import {
  observer,
  Provider
} from 'mobx-react';
import {
  NavLink,
  BrowserRouter as Router
} from 'react-router-dom';

@observer
class Page extends React.Component {

  render () {
    const supportsHistory = 'pushState' in window.history;

    return (
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
    );
  }
}

const warpPage =

ReactDom.render(
<Provider {...store}>
  <Page/>
</Provider>,
document.getElementById('root'));
