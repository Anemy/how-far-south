import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Mailing from './components/mailing';
import Post from './components/post';
import Posts from './components/posts';

import PostData from './posts';

class AppRouter extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/mailing" component={Mailing} />
          <Route path="/posts" component={Posts} />
          <Route path="/blog" component={Posts} />
          {Object.keys(PostData).map(key => (
            <Route
              path={`/${key}`}
              key={key}
              render={(props) => <Post {...props} post={key} />}
            />
          ))}
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;