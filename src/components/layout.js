import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header';

import '../styles/main.scss';

export default class Layout extends Component {
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

        {this.props.children}

        <p>This is the Footer</p>
      </div>
    )
  }
}
