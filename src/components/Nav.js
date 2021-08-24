import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 

class Nav extends Component {
  render() {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><NavLink to={'/'} className="nav-link" activeClassName="active" isActive={() => window.location.pathname === "/"}> Home </NavLink></li>
            <li><NavLink to={'/contact'} className="nav-link" activeClassName="active" isActive={() => window.location.pathname === "/contact"}>Contact</NavLink></li>
            <li><NavLink to={'/about'} className="nav-link" activeClassName="active" isActive={() => window.location.pathname === "/about"}>About</NavLink></li>
            <li><NavLink to={'/portfolio'} className="nav-link" activeClassName="active" isActive={() => window.location.pathname === "/portfolio"}>Portfolio</NavLink></li>
          </ul>
          </nav>
        </div>
    );
  }
}

export default Nav;