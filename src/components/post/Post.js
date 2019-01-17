import PropTypes from 'prop-types';
import React, { Component } from 'react';
import $ from 'jquery';

import './post.scss';

import Posts from '../../posts';

import Footer from '../footer';
import Header from '../header';
import PostItem from './PostItem';

class Post extends Component {
  static propTypes = {
    post: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { post } = this.props;

    document.title = `How Far South - ${Posts[post].title}`;

    this.adChecker = setInterval(() => {
      $.each($('iframe'), (arr,x) => {
        let src = $(x).attr('src');
        if (src && src.match(/(ads)|(ads-iframe)|(disqusads)/gi)) {
          $(x).remove();
        }
      });
    }, 300);

    global.disqusConfig = function() {
      this.page.url = `${window.location.origin}/${window.location.pathname}`; // + window.location.pathname
      this.page.identifier = `${post}`;
    }

    const d = document, s = d.createElement('script');
    s.src = 'https://how-far-south.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }

  componentWillUnmount() {
    if (this.adChecker) {
      clearInterval(this.adChecker);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.post !== prevProps.post) {
      global.disqusConfig = function() {
        this.page.url = `${window.location.origin}/${window.location.pathname}`; // + window.location.pathname
        this.page.identifier = `${this.props.post}`;
      }

      const d = document, s = d.createElement('script');
      s.src = 'https://how-far-south.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    }
  }

  componentDidUpdate() {
    const { post } = this.props;

    document.title = `How Far South - ${Posts[post].title}`;
  }

  render() {
    const { post } = this.props;

    const postLink = Posts[post].link;
    const postTitle = Posts[post].title;
    const postContent = Posts[post].content;

    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <div className="container-padding">
            <h1>{postTitle}</h1>
            {postContent.map((item, index) => <PostItem key={`${postLink}_${index}`} item={item} />)}
          </div>
          {/* <div className="commentbox" /> */}
          <div id="disqus_thread" />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Post;