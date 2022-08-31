import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <img className="navLogo" src=".../assets/images/planet.png" alt="" />
    <h3>Space Travelers&apos; Hub</h3>
    <ul className="nav-links">
      <li><Link to="./">Rockets</Link></li>
      <li className="missionNav"><Link to="/Missions">Missions</Link></li>
      <li><Link to="./Myprofile">My Profile</Link></li>
    </ul>
  </nav>
);

export default Navbar;
