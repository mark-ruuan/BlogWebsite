/* eslint-disable */ 
import React from 'react'
import './style.css'

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </nav>
        <div class="logoContainer">
            <img src={require('../../assets/icon/facebook.png')}alt="logo"/>
            <img src={require('../../assets/icon/instagram.png')}alt="logo"/>
            <img src={require('../../assets/icon/linkedin.png')}alt="logo"/>
        </div>
    </header>
   )

 }

export default Header