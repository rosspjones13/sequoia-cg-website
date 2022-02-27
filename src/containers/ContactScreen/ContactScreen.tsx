import { useState } from "react";
import emailjs from "emailjs-com";
import TitleBar from "../TitleBar/TitleBar";
import "./ContactScreen.scss";

const ContactScreen = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: "",
  //     email: "",
  //     message: "",
  //     isSent: false
  //   }
  //   this.handleNameChange = this.handleNameChange.bind(this)
  //   this.handleEmailChange = this.handleEmailChange.bind(this)
  //   this.handleMessageChange = this.handleMessageChange.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  // }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isSent: false,
  });

  const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const handleEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const handleMessageChange = (event) => {
    setFormData({ ...formData, message: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = formData;
    const templateId = "sequoia_contact_template";
    const to_name = "Heidi Agostini";

    console.log("submitting");
    sendFeedback(templateId, {
      from_name: name,
      reply_to: email,
      message_html: message,
      to_name,
    });
    setFormData({
      name: "",
      email: "",
      message: "",
      isSent: true,
    });
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send("gmail", templateId, variables, "user_do8WMjoHPIeyfsvaMhrIf")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  const { name, email, message, isSent } = formData;
  return (
    <div id="click-container" className="contact-screen">
      <TitleBar active="contact" />
      <div>
        <h2 className="contact-intro">Contact Us</h2>
        <p className="contact-description">
          Please send us an email and we will respond to your message as soon as
          available
        </p>
      </div>
      <div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">
              <div className="label-content">Name:</div>
              <input
                className="input-field name-field"
                type="text"
                onChange={handleNameChange}
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
                onChange={handleEmailChange}
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
                onChange={handleMessageChange}
                placeholder="Please enter your message here..."
                rows={10}
                value={message}
                required
              />
            </label>
          </div>

          <button className="submit-button" type="submit">
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
      <p className="message-sent" style={isSent ? {} : { display: "none" }}>
        Your message has been sent!
      </p>
    </div>
  );
};

export default ContactScreen;
