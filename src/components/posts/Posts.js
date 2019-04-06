// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Img from 'react-image';
import { Link } from 'react-router-dom';

import './posts.scss';

import PostsData from '../../posts';

import Footer from '../footer';
import Header from '../header';
import Loader from '../loader';

// const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };

class Posts extends Component {
  state = {
    hoveredPostKey: ''
  }

  componentDidMount() {
    document.title = 'How Far South - Posts';
  }

  render() {
    const { hoveredPostKey } = this.state;

    return (
      <React.Fragment>
        <Header />
        <div className="container container-padding">
          <h1>Posts</h1>
          {PostsData.keys.map(key => (
            <div className="posts-post" key={key}>
              {PostsData[key].thumbnailUrl && (
                <div
                  className="posts-thumbnail-container"
                  onMouseEnter={() => this.setState({hoveredPostKey: key})}
                  onMouseLeave={() => this.setState({hoveredPostKey: ''})}
                >
                  <Link to={`/${key}`}>
                    <Img
                      className="posts-thumbnail"
                      loader={<Loader noMargin/>}
                      src={PostsData[key].thumbnailUrl}
                    />
                  </Link>
                </div>
              )}
              <div className="posts-title">
                <h2>
                  <Link to={`/${key}`} className={`nice-link ${hoveredPostKey === key ? ' nice-link-hovered' : ''}`} data-title={PostsData[key].title}>
                    {PostsData[key].title}
                  </Link>
                </h2>
                <p className="posts-description">
                  <span className="posts-desc-date">{PostsData[key].date ? `${PostsData[key].date.toLocaleDateString('en-US', dateOptions)} - `:''}</span>{PostsData[key].description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Posts;