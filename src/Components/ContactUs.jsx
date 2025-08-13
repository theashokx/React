import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="hero-section">
        <h1>Contact Rasya</h1>
        <p>We’d love to hear from you!</p>
      </div>

      <div className="contact-content">
        <h2>Get in Touch</h2>
        <p>
          Have questions, feedback, or suggestions? We are here to help you.
          Reach out to us and we’ll get back to you as soon as possible.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              placeholder="Write your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:theashokx@gmail.com">theashokx@gmail.com</a>
          </p>
          <p>
            <strong>Address:</strong> Hyderabad, Telangana, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
