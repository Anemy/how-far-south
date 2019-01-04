import React, { Component } from 'react';

import './mailing.scss'

import Input from '../inputs';
import Header from '../header';

const mailChimpUrl = 'https://howfarsouth.us7.list-manage.com/subscribe/post?u=a52d41048fc373b218f20b076&amp;id=bf52fe4532';

class Mailing extends Component {
  state = {
    emailValue: '',
    fNameValue: '',
    lNameValue: ''
  };

  render() {
    return (
      <div className="mailing-container">
        <Header />
        <div className="mailing">
          {/* Begin Mailchimp Signup Form */}
          <h1 className="mailing-list-title">Subscribe to our Mailing List</h1>
          <form action={mailChimpUrl} method="POST" noValidate>
            <input type="hidden" name="u" value="eb05e4f830c2a04be30171b01"/>
            <input type="hidden" name="id" value="8281a64779"/>
            <Input
              type="email"
              name="EMAIL"
              label="Email"
              id="MERGE0"
              value={this.state.emailValue}
              onChange={ (e)=>{this.setState({emailValue: e.target.value});} }
              autoCapitalize="off"
              autoCorrect="off"
            />
            <Input
              type="text"
              name="FNAME"
              label="First name"
              id="MERGE1"
              value={this.state.fNameValue}
              onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
            />
            <Input
              type="text"
              name="LNAME"
              label="Last name"
              id="MERGE2"
              value={this.state.lNameValue}
              onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
            />
            <button type="submit" name="subscribe" id="mc-embedded-subscribe">Subscribe</button>

            <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
              <label htmlFor="b_name">Name: </label>
              <input type="text" name="b_name" tabIndex="-1" placeholder="Freddie" id="b_name" />

              <label htmlFor="b_email">Email: </label>
              <input type="email" name="b_email" tabIndex="-1" placeholder="youremail@gmail.com" id="b_email" />

              <label htmlFor="b_comment">Comment: </label>
              <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Mailing;