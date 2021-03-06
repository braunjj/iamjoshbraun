import React, { Component } from 'react';
import { Link } from "gatsby"

export default class Header extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="header" id="main">
          <Link to="/" id="logo" title="Home">
            <img src="../assets/jb.svg"/>
          </Link>
          <nav>
            <Link to="/" id="home" title="Home" activeClassName="active">Home</Link>
            <Link to="/contact" id="contact" title="Contact" activeClassName="active">Contact</Link>

          </nav>
      </div>
      )
    }
}
