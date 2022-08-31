import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <img className="navLogo" src="./assets/images/planet.png" alt="" />
    <h3>Space Travelers&apos; Hub</h3>
    <ul className="nav-links">
      <li><NavLink to="./" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Rockets</NavLink></li>
      <li><NavLink to="/Missions" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Missions</NavLink></li>
      <li><NavLink to="Myprofile" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
