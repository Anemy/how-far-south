import React, { Component } from 'react';

import './about.scss'

import Header from '../header';

class About extends Component {
  componentDidMount() {
    document.title = 'How Far South - About';
  }

  render() {
    return (
      <div className="about-container">
        <Header />
        <div className="about">
          <h1>About</h1>
          <p>Hello! How Far South is a project by Adam &amp; <a href="https://rhyshowell.com" target="_blank" rel="noopener noreferrer">Rhys</a>. We are riding our bicycles from Seattle to Argentina.</p>
        </div>
      </div>
    );
  }
}

export default About;