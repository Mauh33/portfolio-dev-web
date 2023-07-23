import React from 'react';
import Selfie from "../assets/selfie/selfie.png";

const Portrait = ({isDropdownActive}) => {
  return (
    <div className={`portrait-bloc ${isDropdownActive ? 'active' : ''}`}>
        <div className="frame-selfie">
            <img className='selfie-img' src={Selfie} alt="selfie perso" />
      </div>
      <div className="description-bloc">
        <p className="description"> Morgane lejeune</p>
        <br />
        <p className="description">Développeuse web</p>
      </div>
    </div>
  );
};

export default Portrait;
