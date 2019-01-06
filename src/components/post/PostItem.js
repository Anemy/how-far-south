import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { CONTENT_TYPES } from '../../posts/constants';

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
    } else if (item.type === CONTENT_TYPES.INTERNAL_LINK) {
      return (
        <Link className="post-link" to={item.link}>
          {item.text}
        </Link>
      );
    }
  }
}

export default PostItem;