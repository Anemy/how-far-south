import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

class Header extends Component {
  static propTypes = {
    showAboutLink: PropTypes.bool,
    showContactLink: PropTypes.bool,
    showHomeLink: PropTypes.bool,
    showMailingLink: PropTypes.bool,
    showPostsLink: PropTypes.bool,
    links: PropTypes.array
  }

  static defaultProps = {
    showAboutLink: false,
    showContactLink: false,
    showHomeLink: true,
    showMailingLink: true,
    showPostsLink: true,
  }

  state = {
    showMobileMenu: false
  }

  mobileMenuClicked = () => {
    this.setState({
      showMobileMenu: !this.state.showMobileMenu
    });
  }

  render() {
    const { showMobileMenu } = this.state;
    const {
      showAboutLink,
      showContactLink,
      showHomeLink,
      showMailingLink,
      showPostsLink
    } = this.props;

    return (
      <div className="header">
        {!showMobileMenu && <button onClick={this.mobileMenuClicked} className="header-mobile-menu-burger"></button>}
        {showMobileMenu && <button onClick={this.mobileMenuClicked} className="header-mobile-menu-close">X</button>}
        <div className={`header-links ${showMobileMenu ? 'header-links-mobile-menu-open' : 'header-links-mobile-menu-closed'}`}>
          {/* {showMobileMenu && <div className="header-mobile-menu-title">Menu</div>} */}
          {showHomeLink && <Link
            to="/"
            className="header-link"
          >
            Home
          </Link>}
          {showPostsLink && <Link
            to="/posts"
            className="header-link"
          >
            Posts
          </Link>}
          {showMailingLink && <Link
            to="/mailing"
            className="header-link"
          >
            Mailing List
          </Link>}
          {showAboutLink && <Link
            to="/about"
            className="header-link"
          >
            About
          </Link>}
          {showContactLink && <Link
            to="/contact"
            className="header-link"
          >
            Contact
          </Link>}
        </div>
      </div>
    );
  }
}

export default Header;