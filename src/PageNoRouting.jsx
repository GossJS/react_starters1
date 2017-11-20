import React, { Component as Comp } from 'react';

import MyComp from './MyComp';
import RGB from './RGB';

const Home = () => <h2 className="jumbotron">Your choice is?</h2>;

export default class extends Comp {
  render() {
    return (<div className="row marketing">
        <div className="col">
          <h1>Hello!</h1>
        </div>
        <div className="col">
            <Home />
            <MyComp title="hello" text="hey" />
            <RGB />
        </div>
      </div>);
  }
}
