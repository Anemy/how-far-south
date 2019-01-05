// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './posts.scss';

import PostsData from '../../posts';

import Header from '../header';

// const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

class Posts extends Component {
  // static propTypes = {
  //   currentPost: PropTypes.string
  // }

  // static defaultProps = {
  //   currentPost: ''
  // }

  componentDidMount() {
    document.title = 'How Far South - Posts';
  }

  render() {
    // const { currentPost } = this.props;

    console.log('at render');

    return (
      <div className="posts-container">
        <Header />
        <div className="posts">
          <h1>Posts</h1>
          {PostsData.keys.map(key => (
            <div className="posts-post" key={key}>
              <Link to={`/${key}`}>
                <h2 className="posts-title">{PostsData[key].title}</h2>
              </Link>
              <p className="posts-description">
                <span className="posts-desc-date">{PostsData[key].date ? `${PostsData[key].date.toLocaleDateString('en-US', dateOptions)} - `:''}</span>{PostsData[key].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Posts;