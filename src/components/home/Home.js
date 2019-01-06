import React, { Component } from 'react';

import './home.scss';

import Header from '../header';
import Map from '../map';

/**
 * "I would much rather fail gloriously, than not venture, not try."
 * “Palms are sweaty. Knees weak arms were heavy, he’s vomiting all over his sweater already. Moms spaghetti.”
**/

class Home extends Component {
  componentDidMount() {
    document.title = 'How Far South';
  }

  render() {
    return (
      <div className="home">
        <Header showHomeLink={false} />
        {/* <div className="home-line" /> */}

        {/* <h4 className="home-under-title">
          COMING SOON
        </h4> */}
        <Map history={this.props.history} />
      </div>
    );
  }
}

export default Home;