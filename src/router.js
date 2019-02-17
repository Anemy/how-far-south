import React, { Component } from 'react';
import { Router, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import Mailing from './components/mailing';
import Post from './components/post';
import Posts from './components/posts';
import ScrollToTopRoute from './components/scroll-to-top-route';

import PostData from './posts';

class AppRouter extends Component {
  render() {
    return (
      <Router
        basename={process.env.PUBLIC_URL}
        history={createBrowserHistory()}
        onUpdate={() => window.scrollTo(0, 0)}
      >
        <Switch>
          <ScrollToTopRoute path="/about" component={About} />
          <ScrollToTopRoute path="/contact" component={Contact} />
          <ScrollToTopRoute path="/mailing" component={Mailing} />
          <ScrollToTopRoute path="/posts" component={Posts} />
          <ScrollToTopRoute path="/blog" component={Posts} />
          {Object.keys(PostData).map(key => (
            <ScrollToTopRoute
              path={`/${key}`}
              key={key}
              render={(props) => <Post {...props} post={key} />}
            />
          ))}
          <ScrollToTopRoute path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default AppRouter;