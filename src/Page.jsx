import React, { Component as Comp } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Switch } from 'react-router';
import { NavLink, Route } from 'react-router-dom';
import Chips from './Chips';
import Toggles from './Toggles';

const HOME_PAGE_ROUTE = '/';
const CHIPS_PAGE_ROUTE = '/chips';
const TOGGLES_PAGE_ROUTE = '/toggles';

const Home = () => <h2 className="jumbotron">Your choice?</h2>;

const Nav = () =>
  <nav className="bg-light" style={{ borderRadius: '10px' }}>
      <ul>
        {[
          { route: HOME_PAGE_ROUTE, label: 'Go home!' },
          { route: CHIPS_PAGE_ROUTE, label: 'Enjoy chips!' },
          { route: TOGGLES_PAGE_ROUTE, label: 'Toggle like a pro!' },
        ].map(link => (
          <li key={link.route}>
            <NavLink to={link.route} >{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>;

export default class extends Comp {
  render() {
    return (<MuiThemeProvider><div className="row marketing">
        <div className="col">
          <Nav />
        </div>
        <div className="col">
          <Switch>
            <Route exact path={HOME_PAGE_ROUTE} component={Home} />
            <Route path={CHIPS_PAGE_ROUTE} render={() => <Chips />} />
            <Route path={TOGGLES_PAGE_ROUTE} component={Toggles} />} />
          </Switch>
        </div>
      </div></MuiThemeProvider>);
  }
}
