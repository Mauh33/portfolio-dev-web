import React from 'react';
import { NavLink } from 'react-router-dom';
import Line from "../assets/icons/line-1.svg";


const Header = () => {

  return (
    <header className='header'>
      <div className="header-layout">
      <div className='portfolio-bloc'>
        <p className='portfolio' id="portfolio">Portfolio</p>
        <svg>
          <image className='line' href={Line} />
        </svg>
      </div>
        <div className='navigation'>
        <NavLink to="/" className="nav-text">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="#about" className="nav-text">
          <li>A propos</li>
        </NavLink>
        <NavLink to="/projects" className="nav-text">
          <li>Projets</li>
        </NavLink>
      </div>

      </div>

    </header>
  );
};

export default Header;

