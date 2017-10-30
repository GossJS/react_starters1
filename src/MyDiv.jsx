import React, { Component as Comp } from 'react';
import Greeting from './Greeting';

export default class extends Comp {
  render() {
    return (<div><div><Greeting title='Click me!' />Hey! My awesome nice head is {this.props.head}</div><div>My body is {this.props.body}</div></div>);
  }
}
