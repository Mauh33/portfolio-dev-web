import React, {useState} from 'react';
import Covermobile from "../assets/cover/bg-cover-mobile.webp";
import CoverTablet from "../assets/cover/bg-cover-tablet.webp";
import CoverDesktop from "../assets/cover/bg-cover.webp";
import Header from '../components/Header';
import Portrait from '../components/Portrait';

const Home = () => {

  const [isDropdownActive, setDropdownActive] = useState(false);
  const handleDropdownClick = () => {
    setDropdownActive(!isDropdownActive);
  }

  return (
    <div className='page'>
      <div className='layout-limit'>
        <picture>
        <source
          type="image/webp"
          srcSet={`${CoverTablet} 834w, ${CoverDesktop} 1200w`}
        sizes="(min-width: 768px) and (max-width: 834px) 100vw, (min-width: 835px) and            (max-width: 1728px) 100vw"
          />
          <img
            className="cover"
            data-src={Covermobile}
            data-sizes='100vw'
            alt=""
          />
        </picture>
        <Header isDropdownActive={isDropdownActive} onDropdownClick={handleDropdownClick} />
        <Portrait isDropdownActive= {isDropdownActive}/>
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

