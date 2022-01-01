import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className='header'>
      <h1
        onClick={() => navigate("/")}>
      Box Office Deetz
      </h1>
      {location.pathname === "/favorites" ? <Link to="/" className="home-link">Home</Link> : 
        <Link to="/favorites" className="favorite-movies-link">Favorite Movies</Link>}
    </div>
  )
}

export default Header;