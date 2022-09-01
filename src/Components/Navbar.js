import React from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/images/planet.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="title">
      <img className="navLogo" src={planet} alt="" />
      <h3>Space Travelers&apos; Hub</h3>
    </div>
    <ul className="nav-links">
      <li><NavLink to="./" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Rockets</NavLink></li>
      <hr />
      <li><NavLink to="./Missions" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Missions</NavLink></li>
      <hr />
      <li><NavLink to="./my-profile" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
