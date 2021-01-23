import React, { Component } from 'react';
import Layout from '../components/layout';

export default class Home extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Layout pageTitle="Contact – Josh Braun">
        <h1>Say Hello 👋🏻</h1>
        <p>Complete the form below or reach out via email at <a href="mailto:hello@iamjoshbraun.com">hello@iamjoshbraun.com</a>.</p>

        <form name="contact" netlify action="contact#success">
        <p>
          <label>Name <input tabindex="1" type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input tabindex="2" type="email" name="email" /></label>
        </p>
        <p>
          <label>Note <textarea tabindex="3" name="note"/></label>
        </p>
        <p>
          <button id="send" tabindex="4" type="submit">Send</button>
        </p>
      </form>
      <p id="success_message" className="hidden">Thanks! Your message was sent.</p>
      </Layout>
      )
    }
}
