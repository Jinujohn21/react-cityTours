import React from 'react';
import  logo from '../../logo.png';
import './Navbar.scss';


export default function Navbar() {
    return (
      <nav className="navbar">
          <img src={logo} alt="City tours logo" width="80px"/>
          <ul className="nav-links">
              <li>
                  <a href="/" className="nav-link">
                      Home
                  </a>
                  </li>
                  <li>
                  <a href="/" className="nav-link">
                    about
                  </a>
                  </li>
                  <li>
                  <a href="/" className="nav-link active">
                     tours
                  </a>
              </li>
          </ul>



      </nav>
    )
}
