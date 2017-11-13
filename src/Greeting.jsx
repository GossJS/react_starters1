import React, { Component as Comp } from 'react';
import { get } from 'axios';
import 'babel-polyfill';

export default class extends Comp {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello world!',
      users: []
    };
  }

  async componentDidMount() {
    const { data: { users } } = await get('http://kodaktor.ru/j/users');
    this.setState({ users });
  }

  onButtonClick(e) {
    this.setState({ text: e.target.textContent });
  }
  render() {
    return (<div><hr />
      <h2>{this.state.text}</h2>
      <button style={{ background: 'aqua' }} onClick={::this.onButtonClick}>{this.props.title}</button>
      <h2>Логины пользователей:</h2>
      <ul>
         {this.state.users.map((x, i) => (<li key={i}>{x.login}</li>))}
      </ul>
    </div>);
  }
}
