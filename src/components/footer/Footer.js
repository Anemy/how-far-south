import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="footer">
          <div className="footer-divider" />
          <div className="footer-content">
            <Link to={`/mailing`} className="footer-link" title="Join our mailing list">
              Join our mailing list
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;