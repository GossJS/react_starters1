import React, {Component as Comp} from 'react';
import {render as r} from 'react-dom';
import Greeting from './Greeting';

class MyDiv extends  Comp {
  render (){
    return [<div><Greeting />Hey! My awesome nice head is {this.props.head}</div>,<div>My body is {this.props.body}</div>]
  }
}

r(
  <MyDiv head="mycomponent" body="mybody" />,
  document.querySelector('.cont')
);
