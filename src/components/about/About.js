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
        <div className="about">About</div>
      </div>
    );
  }
}

export default About;