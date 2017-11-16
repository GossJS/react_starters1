import React, { Component as Comp } from 'react';

export default class extends Comp {
  constructor(props) {
    super(props);
    this.state = {
      title: 'by Goss',
      maintext: 'Demo react'
    };
  }
  onClick({ target }) {
    this.setState({ maintext: target.textContent });
  }
  get myStyle() {
    return { style: { color: 'blue', cursor: 'pointer' } };
  }
  render() {
    return (<div><h1
                      onClick={e => this.onClick(e)} {...this.myStyle}
                      title={this.state.title}
    >{this.props.title}</h1>
                  <p>{this.props.text}</p><p><i>{this.state.maintext}</i></p></div>);
  }
}
