import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

import Posts from '../../posts';

class Footer extends Component {
  render() {
    const mostRecentPostTitle = Posts[Posts.mostRecent].title;

    return (
      <div className="mt-5 mb-5 container-large">
        <div className="footer-divider" />
        <div className="footer-content container-padding">
          <Link to={`/mailing`} className="nice-link footer-link" data-title="Get updates">
            Get updates
          </Link>
          <Link to={Posts.mostRecent} className="nice-link footer-link footer-link-right" data-title={`Most recent post: ${mostRecentPostTitle}`}>
            Most recent post: {mostRecentPostTitle}
          </Link>
          <Link to={`/contact`} className="nice-link footer-link" data-title="Contact us">
            Contact us
          </Link>
        </div>
      </div>
    );
  }
}

export default Footer;