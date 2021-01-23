import React, { Component } from 'react';
import Layout from '../components/layout';

export default class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <Layout pageTitle="Josh Braun">
          <h1>Welcome</h1>
          <p>This is your first page</p>
        </Layout>
      )
    }
}
