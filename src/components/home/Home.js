import React, { Component } from 'react';

import './home.scss';

import Header from '../header';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <div className="home-line" />

        <h1 className="home-title">
          HOW F<span className="home-rotate">A</span>R SOUTH
        </h1>
        <h4 className="home-under-title">
          COMING SOON
        </h4>
      </div>
    );
  }
}

export default Home;