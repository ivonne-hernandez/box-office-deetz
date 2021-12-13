import React from 'react';
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import clapper from '../movie_clapper.svg';
import {useLocation} from 'react-router-dom'



function Header() {

  const location = useLocation()

  let headerLink  
  location.pathname === '/favorites' ? headerLink = <NavLink to="/">Home</NavLink> : headerLink = <NavLink to="/favorites">Favorite Movies</NavLink>

  return (
    <div className='header'>
      <h1 className='headerTitle'>Box Office Deetz</h1>
      {headerLink}
    </div>
  )
}

export default Header;
