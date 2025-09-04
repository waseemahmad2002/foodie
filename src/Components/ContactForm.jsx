import React, { useState } from 'react';
// Fix import for SVG: use import contactImg from '../assets/contact.svg';
import contactImg from '../assets/contact.svg';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '900px', margin: '40px auto' }}>
      {/* Heading OUTSIDE the section */}
      <h2
        style={{
          color: 'orange',
          textAlign: 'center',
          marginBottom: '30px'
        }}
      >
        Contact Us
      </h2>
      

      <section
        style={{
          padding: '32px',
          paddingBottom: '0px',
          background: '#fff',
          borderRadius: '19px',
          boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'stretch',
          gap: '20px'
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '18px' }}>
            <label style={{ color: 'orange', fontWeight: 'bold' }}>Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                paddingBottom: '10px',
                border: '1px solid orange',
                borderRadius: '6px',
                marginTop: '10px'
              }}
            />
          </div>
          <div style={{ marginBottom: '18px' }}>
            <label style={{ color: 'orange', fontWeight: 'bold' }}>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid orange',
                borderRadius: '6px',
                marginTop: '6px'
              }}
            />
          </div>
          <div style={{ marginBottom: '18px' }}>
            <label style={{ color: 'orange', fontWeight: 'bold' }}>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid orange',
                borderRadius: '6px',
                marginTop: '6px'
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: 'orange',
              color: '#fff',
              border: 'none',
              padding: '12px 32px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '100%',
              fontSize: '16px'
            }}
          >
            Send Message
          </button>
        </form>
        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={contactImg}
            alt="Contact"
            style={{ maxWidth: '500px', height: '100%', objectFit: 'contain' }}
          />
        </div>
      </section>
    </div>
  );
};

export default ContactForm;