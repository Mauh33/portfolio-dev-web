import React from 'react';
import {Link, Element, Events, animateScroll as scroll} from "react-scroll";
import Line from "../assets/icons/line-1.svg";


const Header = () => {
  return (
    <header className="header">
      <div className="header-layout">
        <div className="portfolio-bloc">
          <p className="portfolio" id="portfolio">
            Portfolio
          </p>
          <svg>
            <image className="line" href={Line} />
          </svg>
        </div>
        <div className="navigation">
          <Link className='nav-text  nav-text-mobile' activeClass="active" to="home" spy={true} smooth={true} duration={500}>
            <li>Accueil</li>
          </Link>
          <Link className='nav-text  nav-text-mobile' activeClass="active" to="about" spy={true} smooth={true} duration={500}>
            <li>A propos</li>
          </Link>
          <Link className='nav-text  nav-text-mobile' activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
            <li>Projets</li>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
