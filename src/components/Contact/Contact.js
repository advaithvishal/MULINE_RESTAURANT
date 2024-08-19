import React from 'react';
import './Contact.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset(); // Reset the form fields
    alert('Received your details, will get back to you soon.');
  };

  return (
    <div className="contact">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
