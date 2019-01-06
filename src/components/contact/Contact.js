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
      <div className="contact-container">
        <Header />
        <div className="contact">
          <h1>Contact Us</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;