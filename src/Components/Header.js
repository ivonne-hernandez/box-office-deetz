import React from 'react';
import '../styles/Header.css'
import clapper from '../movie_clapper.svg';

function Header() {
  return (
    <aside className='header'>
      {/* <img src={clapper} className="clapper"  alt="clapper"/> */}
      <h1>Box Office Deetz</h1>
    </aside>
  )
}

export default Header;
