import React from "react";
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
    <div className="logo">
      MyWebsite
    </div>
    <div className="list">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">Services</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar
