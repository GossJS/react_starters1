import React, { Component as Comp } from 'react';
import { Switch } from 'react-router';
import { NavLink, Route } from 'react-router-dom';
import MyComp from './MyComp';
import RGB from './RGB';

const HOME_PAGE_ROUTE = '/';
const MYCOMP_PAGE_ROUTE = '/mycomp';
const RGB_PAGE_ROUTE = '/rgb';

const Home = () => <h2 className="jumbotron">Your choice is?</h2>;

const Nav = () =>
  <nav className="bg-light" style={{ borderRadius: '10px' }}>
      <ul>
        {[
          { route: HOME_PAGE_ROUTE, label: 'Go home!' },
          { route: MYCOMP_PAGE_ROUTE, label: 'See a compo!' },
          { route: RGB_PAGE_ROUTE, label: 'Enjoy colors!' },
        ].map(link => (
          <li key={link.route}>
            <NavLink to={link.route} >{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>;

export default class extends Comp {
  render() {
    return (<div className="row marketing">
        <div className="col">
          <Nav />
        </div>
        <div className="col">
          <Switch>
            <Route exact path={HOME_PAGE_ROUTE} component={Home} />
            <Route exact path={MYCOMP_PAGE_ROUTE} render={() => <MyComp title="hello" text="hey" />} />
            <Route path={RGB_PAGE_ROUTE} component={RGB} />
          </Switch>
        </div>
      </div>);
  }
}

export { HOME_PAGE_ROUTE, MYCOMP_PAGE_ROUTE, RGB_PAGE_ROUTE };
