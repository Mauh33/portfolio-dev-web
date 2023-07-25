import React from 'react';
import LinkedinImg from "../assets/icons/icon-linkedin.png";
import GithubImg from "../assets/icons/icon-github.png";
import { useDropdown } from '../utils/hooks/dropdownContext';

const SocialMedia = () => {
  const {isDropdownActive} = useDropdown();
  return (
    <section className={`socialMedia-bloc ${isDropdownActive ? "active" : ""}`}>
      <a href="https://www.linkedin.com/in/morgane-lejeune33/">
      <img src={LinkedinImg} alt="" className="social-img"/>
      </a>
      <a href="https://github.com/Mauh33">
      <img src={GithubImg} alt="" className="social-img" />
      </a>
    </section>
  );
};

export default SocialMedia;
