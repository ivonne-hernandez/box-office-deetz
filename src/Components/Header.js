import React from 'react';
import '../styles/Header.css'
import clapper from '../movie_clapper.svg';

function Header() {
  return (
    <div className='header'>
      <h1>Box Office Deetz</h1>
      <img src={clapper} className="clapper"  alt="clapper"/>
    </div>
  )
}

export default Header;
