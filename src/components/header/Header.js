import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import './header.scss';

class Header extends Component {
  static propTypes = {
    links: PropTypes.array
  }

  static defaultProps = {
    links: [{
      text: 'About',
      url: '/about'
    }, {
      text: 'Contact',
      url: '/contact'
    }]
  }

  render() {
    // const { links } = this.props;

    return (<div />);

    // return (
    //   <div className="nav top-nav">
    //     <div className="header-title">
    //       How Far South <span role="img" aria-label="">🚲</span>
    //     </div>
    //     <div className="header-links">
    //     {links.map(link => (
    //       <Link
    //         to={link.url}
    //         className="header-link"
    //         key={link.url}
    //       >
    //         {link.text}
    //       </Link>
    //     ))}
    //     </div>
    //   </div>
    // );
  }
}

export default Header;