import React from 'react';
import { useDropdown } from '../utils/hooks/dropdownContext';

const CatchPhrase = () => {
  const {isDropdownActive} = useDropdown();
  return (
    <section className={`catchPhrase-bloc ${isDropdownActive ? "active" : ""}`}>
      <p className="catchPhrase">Hey, <br /> Bienvenue visiteur, visiteuse <br /> Prends tes aises, <br />et viens découvrir ma passion !...</p>
      <div className='green-bloc2'></div>
    </section>
  );
};

export default CatchPhrase;
