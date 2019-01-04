import React, { Component } from 'react';

import './contact.scss';

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
          Contact
        </div>
      </div>
    );
  }
}

export default Contact;