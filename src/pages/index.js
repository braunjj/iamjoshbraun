import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header';

import '../styles/main.scss';

export default class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="app">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Josh Braun</title>
      </Helmet>

      <Header />
        <h1>Welcome</h1>
        <p>This is your first page</p>
      </div>
      )
    }
}
