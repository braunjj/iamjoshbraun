import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';

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
            <title>{this.props.pageTitle}</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, minimal-ui"
            />
            <meta property="og:url" content="https://iamjoshbraun.com" />
            <meta property="og:title" content="Josh Braun" />
            <meta
              property="og:image"
              content="https://iamjoshbraun.netlify.app/files/assets/og-image.jpg"
            />
            <meta property="og:description" content="I’m a product designer based in NYC. I’m
            currently designing machine learning business process automation tools." />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@iamjoshbraun" />
            <meta name="twitter:creator" content="@iamjoshbraun" />
            <meta name="twitter:title" content="Josh Braun" />
            <meta name="twitter:description" content="I’m a product designer based in NYC. I’m
            currently designing machine learning business process automation tools." />
            <meta
              name="twitter:image"
              content="https://iamjoshbraun.netlify.app/files/assets/twitter-card.jpg"
            />

        </Helmet>

        <Header />

        {this.props.children}

        <Footer />
      </div>
    )
  }
}
