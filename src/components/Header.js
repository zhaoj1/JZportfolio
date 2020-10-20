import React from 'react';
import '../App.css';

function Header() {
  return (
    <div className="header">
      <span className='name'>Justin Zhao</span> 
      <div className='links'>
        <span className='link'>ABOUT</span>
        <span className='link'>PROJECTS</span>
        <span className='link'>CONTACT</span>
      </div>
    </div>
  );
}

export default Header;
