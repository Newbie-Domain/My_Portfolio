import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ background: '#2c3e50', color: '#fff', textAlign: 'center', padding: '30px 20px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Social Links */}
        <div style={{ marginBottom: '15px' }}>
          <a href="https://github.com/Newbie-Domain" target="_blank" rel="noreferrer" style={{ color: '#fff', margin: '0 10px', transition: 'color 0.3s' }}
             onMouseOver={e => e.currentTarget.style.color = '#f39c12'}
             onMouseOut={e => e.currentTarget.style.color = '#fff'}>
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/pawanlonbale" target="_blank" rel="noreferrer" style={{ color: '#fff', margin: '0 10px', transition: 'color 0.3s' }}
             onMouseOver={e => e.currentTarget.style.color = '#0e76a8'}
             onMouseOut={e => e.currentTarget.style.color = '#fff'}>
            <FaLinkedin size={24} />
          </a>
          <a href="#" target="_blank" rel="noreferrer" style={{ color: '#fff', margin: '0 10px', transition: 'color 0.3s' }}
             onMouseOver={e => e.currentTarget.style.color = '#1da1f2'}
             onMouseOut={e => e.currentTarget.style.color = '#fff'}>
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Contact Info */}
        <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
          <a href="snaptixfox@gmail.com" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <FaEnvelope /> snaptixfox@gmail.com
          </a>
          <a href="tel:+919284410903" style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <FaPhone /> +91-9284410903
          </a>
        </div>

        {/* Copyright */}
        <p style={{ fontSize: '14px', marginTop: '10px' }}>
          &copy; 2026 Pawan Lonbale. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
