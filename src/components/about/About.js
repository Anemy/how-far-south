import React, { Component } from 'react';

import './about.scss'

import Footer from '../footer';
import Header from '../header';

class About extends Component {
  componentDidMount() {
    document.title = 'How Far South - About';
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container container-padding">
          <h1>About</h1>
          <p>Hello! How Far South is a project by Adam &amp; <a href="https://rhyshowell.com" target="_blank" rel="noopener noreferrer">Rhys</a>. We are riding our bicycles from Seattle to Argentina.</p>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;