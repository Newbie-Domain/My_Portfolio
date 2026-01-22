import React from 'react';

const Hero = () => {
  return (
    <section id="hero" style={{ background: 'linear-gradient(to right, #3498db, #2ecc71)', color: '#fff', padding: '100px 0', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Hi, I'm Pawan Lonbale</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>A passionate web developer specializing in Java , Spring Boot, React.js and more.</p>
        <a href="#contact" className="btn">Get In Touch</a>
      </div>
    </section>
  );
};

export default Hero;