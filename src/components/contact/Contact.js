import React, { Component } from 'react';

import './contact.scss';

import Footer from '../footer';
import Header from '../header';
import Input from '../inputs';

class Contact extends Component {
  state = {
    email: '',
    name: ''
  }

  componentDidMount() {
    document.title = 'How Far South - Contact';
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container container-padding">
          <h1>Contact Us</h1>
          {/* <p>Have a place we can stay for an evening?</p> */}
          <form action="https://formspree.io/rhysh@live.com" method="POST">
            <Input
              type="text"
              name="name"
              label="Name"
              id="name"
              value={this.state.name}
              onChange={e => {this.setState({name: e.target.value});} }
              autoCapitalize="off"
              autoCorrect="off"
            />
            <Input
              type="email"
              name="_replyto"
              label="Email"
              id="_replyto"
              value={this.state.email}
              onChange={e => {this.setState({email: e.target.value});} }
              autoCapitalize="off"
              autoCorrect="off"
            />
            <textarea name="message" placeholder="Type a message..." />
            <button type="submit">Send</button>
          </form>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;