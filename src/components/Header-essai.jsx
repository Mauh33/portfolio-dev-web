import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Line from "../assets/icons/line-1.svg";
import MenuB from "../assets/icons/icon-menu-cloud.png";
import MenuB96 from "../assets/icons/icon-menu-cloud-96.png";
import {useDropdown} from '../utils/hooks/dropdownContext';


const Header = () => {
  const { isDropdownActive, setDropdownActive} = useDropdown();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showInitialButton, setShowInitialButton] = useState(false);


  useEffect(() => {
    const changeNavElement = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", changeNavElement);

    return () => {
      window.removeEventListener("resize", changeNavElement);
    };
  }, [] );

  const onDropdownClick = () => {
    setDropdownActive(!isDropdownActive);
    setShowInitialButton(true);
  };

  return (
    <header className='header'>
      <div className="header-layout">
      <div className='portfolio-bloc'>
        <p className='portfolio' id="portfolio">Portfolio</p>
        <svg>
          <image className='line' href={Line} />
        </svg>
      </div>
      {windowWidth <= 833 && (
        <button className='btn-menu' onClick={onDropdownClick}>
          <img
            className={windowWidth >= 568 ? 'menuB96' : 'menuB'}
            srcSet={`${MenuB} 360w, ${MenuB96} 568w`}
            sizes="(min-width: 568px) and (max-width: 834px) 100vw"
            alt="menu burger pour écran mobile"
            />
        </button>
      )}
      {windowWidth >= 834 && (
        <div className={`navigation ${isDropdownActive ? "dropdown" : ""}`}>
        <NavLink to="/" className={windowWidth >= 834 ? "nav-text" : "nav-text-mobile"}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="#about" className={windowWidth >= 834 ? "nav-text" : "nav-text-mobile"}>
          <li>A propos</li>
        </NavLink>
        <NavLink to="/projects" className={windowWidth >= 834 ? "nav-text" : "nav-text-mobile"}>
          <li>Projets</li>
        </NavLink>
      </div>
      )}
      </div>
      {isDropdownActive && windowWidth <= 833 && (
        <div className={`dropdown-menu ${isDropdownActive ? 'active' : ''}`}>

          <NavLink to="/" className="nav-text-mobile nav-text-1">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/about" className="nav-text-mobile nav-text-2">
            <li>A propos</li>
          </NavLink>
          <NavLink to="/projects" className="nav-text-mobile nav-text-3">
            <li>Projets</li>
          </NavLink>

        </div>
      )}
    </header>
  );
};

export default Header;

