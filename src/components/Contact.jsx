import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ background: '#f4f4f4' }}>
      <div className="container">
        <h2>Contact</h2>
        <form style={{ maxWidth: '600px', margin: '0 auto' }}>
          <input type="text" placeholder="Name" style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px' }} />
          <input type="email" placeholder="Email" style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px' }} />
          <textarea placeholder="Message" style={{ width: '100%', padding: '10px', margin: '10px 0', border: '1px solid #ccc', borderRadius: '5px', height: '100px' }}></textarea>
          <button type="submit" className="btn" style={{ width: '100%' }}>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;