import React from 'react';

const Header = () => {
  return (
    <header style={{ background: '#2c3e50', color: '#fff', padding: '10px 0', position: 'fixed', width: '100%', zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem' }}>Mr. Pawan</h1>
        <nav>
          <ul style={{ listStyle: 'none', display: 'flex' }}>
            <li style={{ margin: '0 15px' }}><a href="#hero" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
            <li style={{ margin: '0 15px' }}><a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
            <li style={{ margin: '0 15px' }}><a href="#skills" style={{ color: '#fff', textDecoration: 'none' }}>Skills</a></li>
            <li style={{ margin: '0 15px' }}><a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
            <li style={{ margin: '0 15px' }}><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;