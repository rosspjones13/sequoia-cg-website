import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import TitleBar from '../TitleBar/TitleBar'
import './ContactScreen.css'

class ContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      isSent: false
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { name, email, message } = this.state
    const templateId = "sequoia_contact_template"
    const to_name = "Heidi Agostini"

    console.log("submitting")
    this.sendFeedback(templateId, { from_name: name, reply_to: email, message_html: message, to_name })
    this.setState({
      name: "",
      email: "",
      message: "",
      isSent: true
    })
  }

  sendFeedback(templateId, variables) {
    emailjs.send('gmail', templateId, variables, 'user_do8WMjoHPIeyfsvaMhrIf')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }

  render() {
    const { name, email, message, isSent } = this.state
    return (
      <div id="click-container" className="contact-screen">
        <TitleBar active="contact"/>
        <div>
          <h2 className="contact-intro">
            Contact Us
          </h2>
          <p contentEditable={true} className="contact-description">
            Please send us an email and we will respond to your message as soon as available
          </p>
        </div>
        <div>
          <form className="contact-form" onSubmit={this.handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">
                <div className="label-content">Name:</div>
                <input 
                  className="input-field name-field"
                  type="text" 
                  onChange={this.handleNameChange} 
                  placeholder="Full Name"
                  value={name}
                  required
                />
              </label>
            </div>

            <div className="form-field">
              <label htmlFor="email">
                <div className="label-content">Email:</div>
                <input 
                  className="input-field email-field"
                  type="email"
                  onChange={this.handleEmailChange}
                  placeholder="email@example.com"
                  value={email}
                  required
                />
              </label>
            </div>

            <div className="form-field">
              <label htmlFor="message">
                <div className="label-content">Message:</div>
                <textarea
                  className="stretch text-area" 
                  onChange={this.handleMessageChange} 
                  placeholder="Please enter your message here..."
                  rows="10"
                  value={message}
                  required 
                />
              </label>
            </div>

            <button 
              className="submit-button" 
              type="submit" 
            >
              Send
            </button>
{/* 
          <div>
            { window.location.hash === '#success' &&
              <div id="success">
                <p>Your message has been sent!</p>
              </div>
            }
            { window.location.hash === '#error' &&
              <div id="error">
                <p>An error occured while submitting the form.</p>
              </div>
            }
          </div> */}
          </form>
        </div>
        <p className="message-sent" style={isSent ? {} : {display: "none"}}>
          Your message has been sent!
        </p>
      </div>
    )
  }
}

export default ContactScreen;