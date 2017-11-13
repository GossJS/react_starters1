import React, { Component as Comp } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Chips from './Chips';
import Toggles from './Toggles';

export default class extends Comp {
  render() {
    return (<MuiThemeProvider><div className="row marketing">
        <div className="col">
          <Chips />
        </div>
        <div className="col">
          <Toggles />
        </div>
      </div></MuiThemeProvider>);
  }
}
