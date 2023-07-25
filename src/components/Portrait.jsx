import React from 'react';
import Selfie from "../assets/selfie/selfie.png";
import { useDropdown } from '../utils/hooks/dropdownContext';

const Portrait = () => {
  const {isDropdownActive} = useDropdown();
  return (
    <section className={`portrait-bloc ${isDropdownActive ? 'active' : ''}`}>
        <div className="frame-selfie">
            <img className='selfie-img' src={Selfie} alt="selfie perso" />
      </div>
      <div className="description-bloc">
        <p className="description"> Morgane lejeune</p>
        <p className="description">Développeuse web</p>
        <div className='green-bloc'></div>
      </div>
    </section>
  );
};

export default Portrait;
