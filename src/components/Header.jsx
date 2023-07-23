import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Line from "../assets/icons/line-1.svg";
import MenuB from "../assets/icons/icon-menu-cloud.png";

const Header = ({isDropdownActive, onDropdownClick}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showInitialButton, setShowInitialButton] = useState(true);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const changeNavElement = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeNavElement);

    return () => {
      window.removeEventListener("resize", changeNavElement);
    };
  }, [showInitialButton]);


  const handleMenuClick = () => {
    if (windowWidth <= 833) {
      onDropdownClick();
      setShowInitialButton(true);
      setActive(!isActive);
    }
  };

  return (
    <div className='header'>
      <div className='portfolio-bloc'>
        <p className='portfolio'>Portfolio</p>
        <svg>
          <image className='line' href={Line} />
        </svg>
      </div>
      {showInitialButton && windowWidth <= 833 && (
        <button className='btn-menu' onClick={handleMenuClick}>
          <img className="MenuB" src={MenuB} alt="menu burger pour écran mobile" />
        </button>
      )}
      {windowWidth >=833 && (
      <div className={`navigation ${windowWidth <= 833 ? "dropdown" : ""}`}>
        <NavLink to="/" className={windowWidth >= 834 ? "nav-text" : "nav-text-mobile"}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className={windowWidth >= 834 ? "nav-text" : "nav-text-mobile"}>
          <li>A propos</li>
        </NavLink>
        <NavLink to="/projects" className={windowWidth >= 834 ? "nav-text" : "nav-text-mobile"}>
          <li>Projets</li>
        </NavLink>
      </div>
      )}
      {isDropdownActive && windowWidth <= 833 && (
        <div className={`dropdown-menu ${isActive ? 'dropdown-menu-active' : ''}`}>
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
    </div>
  );
};

export default Header;
