import React, { Component } from 'react';

import './App.scss';
import './grid.css';

import 'babel-polyfill';

import Router from './router';

class App extends Component {
  render() {    
    return (
      <div className="app">
        <Router />
      </div>
    );
  }
}

export default App;
