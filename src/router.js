import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Contact from './components/contact';
import Home from './components/home';

class AppRouter extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;