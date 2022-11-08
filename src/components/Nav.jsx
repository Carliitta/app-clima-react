import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import {Link} from 'react-router-dom'


function Nav({onSearch}) {
  return (
    <nav className="navbar navbar-dark bg-dark">
        <div className='busqueda'>
      <Link to='/'>
      <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
        <span className="navbar-brand">
       
          Henry - Weather App
        </span>
      
      </Link>
    
      <Link className='about' to='/about'>
        <span>About</span>
      </Link>
      </div>
        <SearchBar
          onSearch={onSearch}
        />

     
    </nav>
  );
};

export default Nav;
