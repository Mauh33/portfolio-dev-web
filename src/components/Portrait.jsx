import React from 'react';
import Selfie from "../assets/selfie/selfie.png";

const Portrait = () => {
  return (
    <section className={'portrait-bloc'}>
        <div className="frame-selfie">
            <img className='selfie-img' src={Selfie} alt="selfie perso" />
      </div>
      <div className="description-bloc">
        <h1 className="description"> Morgane lejeune <br /> Développeuse web</h1>
        <div className='green-bloc'></div>
      </div>
    </section>
  );
};

export default Portrait;
