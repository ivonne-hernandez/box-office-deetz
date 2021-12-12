import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import clapper from '../movie_clapper.svg';

function Header() {
  return (
    <div className='header'>
      <h1>Box Office Deetz</h1>
      <NavLink to="/favorites">Favorite Movies</NavLink>
      <img src={clapper} className="clapper"  alt="clapper"/>
    </div>
  )
}

export default Header;
