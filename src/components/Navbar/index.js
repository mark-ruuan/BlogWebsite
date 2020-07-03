/* eslint-disable */
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom';
import './style.css'

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
     e.preventDefault();
     alert('Searched')
  }

  const openSearch = () => {
    setSearch(!search);
  }

  const searchClass = (search == false) ? 'searchInput' : 'searchInput active';

  return(
    <div className="navbar">
        <ul className="navbarMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/post">Posts</NavLink></li>
            <li><NavLink to="/about-us">About Us</NavLink></li>
            <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        </ul>
        <div className="search">
          <form onSubmit={submitSearch}>
            <input type="text" className={searchClass} placeholder="Search"/>
            <img onClick={openSearch}className="searchIcon"src = {require('../../assets/icon/search.png')}alt="Search" />
          </form>
            
        </div>
    </div>
   )

 }

export default Navbar