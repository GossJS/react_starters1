import React, { Component as Comp } from 'react';
import { interval as inter } from 'gossrandom';

const n = inter(40, 60);

export default class extends Comp {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }
  onButtonClick(e) {
    alert(e.target.nodeName);
  }
  render() {
    return (<div><hr />
      <h2>Hi! You random number is {n}!</h2>
      <button onClick={e => this.onButtonClick(e)}>Click me!</button>
    </div>);
  }
}
