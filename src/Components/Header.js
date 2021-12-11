import React from 'react';
import '../styles/Header.css'
import clapper from '../movie_clapper.svg';

function Header() {
  return (
    <div className='header'>
      <h1>Box Office Deetz
        <img src={clapper} className="clapper"  alt="clapper"/>
      </h1>
    </div>
  )
}


export default Header;
