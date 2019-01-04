import PropTypes from 'prop-types';
import React, { Component } from 'react';

import './post.scss';

import Posts from '../../posts';

import Header from '../header';

class Post extends Component {
  static propTypes = {
    post: PropTypes.string.isRequired
  }

  componentDidMount() {
    const { post } = this.props;

    document.title = `How Far South - ${Posts[post].title}`;
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
      <div className="post-container">
        <Header />
        <div className="post">
          <h1 className="post-title">{postTitle}</h1>
          {postContent.map((item, index) => {
            return (
              <p className="post-text" key={`${postLink}_${index}`}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Post;