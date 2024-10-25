import React, { useState, useRef } from 'react';
import './Contact.css';
import msg_icon from '../Assets/msg-icon.png';
import mail_icon from '../Assets/mail-icon.png';
import phone_icon from '../Assets/phone-icon.png';
import white_arrow from '../Assets/white-arrow.png';

const Contact = ({ contactRef }) => {  // Receive contactRef as prop
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, succeeded: false, errors: [] });

  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, errors: [] });

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', phone: '', message: '' });
        setStatus({ submitting: false, succeeded: true, errors: [] });
      } else {
        const data = await response.json();
        setStatus({ submitting: false, succeeded: false, errors: data.errors || [] });
      }
    } catch (error) {
      setStatus({ submitting: false, succeeded: false, errors: [{ message: 'Submission failed' }] });
    }
  };

  return (
    <div className='contact' ref={contactRef} id='login'>
      <div className='contact-col'>
        <h3>Send us a message <img src={msg_icon} alt='message icon' /></h3>
        <p>Feel free to reach out through our contact form or find our information below. Your feedback, questions, and suggestions are valued as we strive to provide exceptional services to our music community.</p>
        <ul>
          <li><img src={mail_icon} alt='email icon' />Stereokhart@gmail.com</li>
          <li><img src={phone_icon} alt='phone icon' />+234 706 638 4202</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={handleSubmit}>
          <label>Your name</label>
          <input 
            type='text' 
            name='name' 
            placeholder='Enter your name' 
            value={formData.name} 
            onChange={handleChange} 
            required
          />
          <label>Phone Number</label> 
          <input 
            type='tel' 
            name='phone' 
            placeholder='Enter your mobile number' 
            value={formData.phone} 
            onChange={handleChange} 
            required
          />
          <label>Write your messages here</label> 
          <textarea 
            name='message' 
            rows='6' 
            placeholder='Enter your message' 
            value={formData.message} 
            onChange={handleChange} 
            required
          ></textarea>

          <button type='submit' className='submit' disabled={status.submitting}>
            {status.submitting ? 'Submitting...' : 'Submit now'} 
            <img src={white_arrow} alt='arrow' />
          </button>

          {status.succeeded && <p>Thank you for your message!</p>}
          {status.errors.length > 0 && (
            <div style={{ color: 'red' }}>
              {status.errors.map((error, idx) => <p key={idx}>{error.message}</p>)}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
