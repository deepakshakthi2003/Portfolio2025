import React, { useRef } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

import email from '../../assets/email.png';
import location from '../../assets/placeholder.png';
import phone from '../../assets/telephone.png';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('FAILED:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );

    e.target.reset(); // Clear the form after submission
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h3>GET IN TOUCH</h3>
          <h2>CONTACT</h2>
          <div className="contact-details">
            <div>
              <img src={email} alt="email" />
              <p>deepakwebdeveloper2003@gmail.com</p>
            </div>
            <div>
              <img src={location} alt="location" />
              <p>Tamil Nadu, India</p>
            </div>
            <div>
              <img src={phone} alt="phone" />
              <p>+91-8072047421</p>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="from_name" placeholder="Name" required />
          <input type="email" name="from_email" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" placeholder="Message" rows="5" required />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
