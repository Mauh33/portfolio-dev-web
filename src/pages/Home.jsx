import React from 'react';
import {useDropdown} from "../utils/hooks/dropdownContext";
import Covermobile from "../assets/cover/bg-cover-mobile.webp";
import CoverTablet from "../assets/cover/bg-cover-tablet.webp";
import CoverDesktop from "../assets/cover/bg-cover.webp";
import Header from '../components/Header';
import Portrait from '../components/Portrait';
import SocialMedia from '../components/SocialMedia';
import CatchPhrase from '../components/CatchPhrase';
import TabletDoubleArrow from "../assets/icons/icon-double-bas-arcade-96.png";
import DesktopDoubleArrow from "../assets/icons/icon-double-bas-desktop.png";

const Home = () => {
  const {isDropdownActive, setDropdownActive} = useDropdown();
  const handleDropdownClick = () => {
    setDropdownActive(!isDropdownActive);
  };

  return (
    <div className='page'>
      <div className='layout-limit'>
        <picture>
        <source
          type="image/webp"
          srcSet={`${CoverTablet} 834w, ${CoverDesktop} 1728w`}
        sizes="(min-width: 568px) and (max-width: 834px) 100vw, (min-width: 835px) and (max-width: 2560px) 100vw"
          />
          <img
            className="cover"
            data-src={Covermobile}
            data-sizes='100vw'
            alt=""
          />
        </picture>
        <Header isDropdownActive={isDropdownActive} onDropdownClick={handleDropdownClick} />
        <main>
          <div className="first-page">

        <Portrait/>
        <SocialMedia/>
        <CatchPhrase/>
          <div className={`arrow-bloc ${isDropdownActive ? "active" : ""}`}>
        <button>
          <picture>
            <source
              type='image/png'
              srcSet={`${DesktopDoubleArrow}, ${TabletDoubleArrow}`}
              sizes='(min-width: 360px) and (max-width: 1727px), (min-width: 1728px) and (max-width: 2560px)'
            />
          <img
            className='arrow-icon'
            data-src={TabletDoubleArrow}
            alt="flèche pour passer au titre suivant" />
          </picture>
        </button>
          </div>
        </div>
        </main>
      </div>
    </div>
  );
};

export default Home;

/*  <source
type="image/webp"
data-srcSet=" ../assets/bg-cover-mobile.webp 0w,
../assets/cover/bg-cover-tablet.webp 768w, ../assets/cover/bg-cover.webp 1200w"
sizes="(min-width: 768px) 100vw, (min-width: 1200px) 100vw"
/> */

/* data-srcSet={`
  ${process.env.PUBLIC_URL}/assets/cover/bg-cover-tablet.webp 100vw,
  ${process.env.PUBLIC_URL}/assets/cover/bg-cover.webp 100w`}
sizes="(max-width: 767px) 100vw, (min-width: 768px) 100vw, (min-width: 1200px) 100vw" */

