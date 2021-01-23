import React, { Component } from 'react';
import Header from '../components/header';

import '../styles/main.scss';

export default class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="app">
      <Header />
        <h1>Contact Page</h1>
        <p>This is your first page</p>
      </div>
      )
    }
}
