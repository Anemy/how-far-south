import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Img from 'react-image';

import './post-item.scss';

import { CONTENT_TYPES } from '../../posts/constants';

import Loader from '../loader';

class PostItem extends Component {
  static propTypes = {
    item: PropTypes.any.isRequired
  }

  render() {
    const { item } = this.props;

    if (!item.type) {
      return (
        <p className="post-text">
          {item}
        </p>
      );
    } else if (item.type === CONTENT_TYPES.EXTERNAL_LINK) {
      return (
        <a
          className="post-link nice-link"
          href={item.url}
          data-title={item.text}
          rel="noopener noreferrer"
          target={item.target ? item.target : '_self'}
        >
          {item.text}
        </a>
      );
    } else if (item.type === CONTENT_TYPES.INTERNAL_LINK) {
      return (
        <Link
          className="post-link nice-link"
          to={item.url}
          data-title={item.text}
        >
          {item.text}
        </Link>
      );
    } else if (item.type === CONTENT_TYPES.IMAGE) {
      // return <Loader />;
      return <Img
        className="post-image"
        src={item.url}
        alt={item.alt}
        loader={<Loader />}
      />;
    }
  }
}

export default PostItem;