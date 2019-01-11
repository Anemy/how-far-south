import React, { Component } from 'react';

import './contact.scss';

import Footer from '../footer';
import Header from '../header';

class Contact extends Component {
  componentDidMount() {
    document.title = 'How Far South - Contact';
  }


  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container container-padding">
          <h1>Contact Us</h1>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;