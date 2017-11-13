import React, { Component as Comp } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chips from './Chips';
import Toggles from './Toggles';

export default class extends Comp {
  render() {
    return (<MuiThemeProvider><div><h3>Choose a nice component for you</h3>
        <hr />
        <Chips />
        <hr />
        <Toggles />
      </div></MuiThemeProvider>);
  }
}
