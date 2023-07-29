import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Portrait from '../components/Portrait';
import SocialMedia from '../components/SocialMedia';
import CatchPhrase from '../components/CatchPhrase';
import Footer from '../components/Footer';
import TabletDoubleArrow from "../assets/icons/icon-double-bas-arcade-96.png";
import DesktopDoubleArrow from "../assets/icons/icon-double-bas-desktop.png";
import ReactIcon from "../assets/icons/icon-react.png";
import NodeIcon from "../assets/icons/icon-node.png";
import PictureWoman from "../assets/cover/women-web-developer.png";
import KasaProjectImg from "../assets/images-projects/Kasa-accueil.webp";
import MonVieuxGrimImg from "../assets/images-projects/monVieuxGrimoire-accueil.webp";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const [showImg, setShowImg] =useState(false);


  useEffect(() => {
    const changeImgElement = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeImgElement);

    return () => {
      window.removeEventListener('resize', changeImgElement);
    };
  }, []);



  return (
    <div className='page' id='home'>
        <Header />
      <div className='layout-limit'>
        <main>
          <section className="first-page" >
            <Portrait />
            <SocialMedia />
            <CatchPhrase />
            <div className="arrow-bloc">
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
                    alt="flèche pour passer au titre suivant"
                  />
                </picture>
              </button>
            </div>

          </section>
          <section className="second-page" id='about'>
            <h2 className="subtitle">A propos</h2>
            {windowWidth >= 1728 && (
              <img src={PictureWoman} alt="" className="draw-woman" />
            )}
            <div className="text-about-bloc linear-bloc">
              <p className="text-about text-about-1">Développeuse passionnée par le code et l’apprentissage constant que ce métier m’offre, je m’intéresse beaucoup au clean code et au TDD.</p>
              <br />
              <p className="text-about text-about-2 ">Grâce à la formation de chez Openclassrooms
              j’ai pu réaliser des projets d’actualité avec une stack solide qui répond à un ensemble de besoins.</p>
            </div>
            <div className='dev-environnement-bloc'>
            <p className="text-dev-environnement">Environnement de développement : <br /> React et node.js</p>
            <div className="icon-dev">
            <img src={ReactIcon} className="react-icon"
            alt='react icon'
            />
            <img src={NodeIcon} className="node-icon"
              alt='node-icon'
            />
            </div>
            </div>
          </section>
          <section className="third-page" id="projects">
            <h2 className="subtitle">Mes projets</h2>
            <div className="project-bloc">
              <div className='kasa-project'>
              <h3 className="subtitle-3">Kasa : <br /> site de location immobilière entre particuliers</h3>
              <img className='project-img' src={KasaProjectImg} alt="projet de site Kasa" />
              <a className='link-project' href="https://github.com/Mauh33/Kasa">Clique pour découvrir ce projet</a>
              <p className="project-description projet-description-1 linear-bloc">On m'a chargé de réaliser Kasa. <br />
              La création du site a été faite avec la librairie React. J'ai intégré la maquette dans les formats Pc, tablette, mobile. <br /> La gestion des routes a été faite avec React Router, et la créations de composants réutilisables via des props et Hooks (carrousel, collapse, header, footer) pour permettre à l'utilisateur de choisir un appartement à louer dans de bonnes dispositions.</p>
              <div className='skills-bloc'>
                <h4 className='subtitle-3 subtitle-4'>Compétences : </h4>
                <div className='skills-line-bloc'>
                  <ul className='ul-skills ul-skills-1'>
                    <li className='text-skills'>React</li>
                    <li className='text-skills'>React Router</li>
                    <li className='text-skills'>Javascript</li>
                    <li className='text-skills'>Sass</li>
                  </ul>
                </div>
              </div>
              </div>
              <div className='monVieuxGrim-project'>
              <h3 className="subtitle-3">Mon vieux grimoire : <br /> site de notation de livres</h3>
              <img src={MonVieuxGrimImg} alt="projet de site Mon vieux grimoire " className="project-img" />
              <a className='link-project' href="https://github.com/Mauh33/Mon-vieux-grimoire">Clique pour découvrir ce projet</a>
              <p className="project-description project-description-2 linear-bloc">Ce site est indiquée pour les grands et petits lecteurs qui ont envie de noter des livres et avoir un aperçu des livres les mieux notés, faire partie d'une communauté...
               La création du backend du site a été faite via un environnement node.js. il m'a fallu réaliser : une connection à la base MongoDB et création de modèles de données, la gestion des routes et mise en place de controllers, le stockage des données de manière sécurisée, la mise en oeuvre des opérations CRUD, et l'authentification avec email unique et hashage du mot de passe. Ainsi que le Traitement des images</p>
              <div className='skills-bloc'>
                <h4 className='subtitle-3 subtitle-4'>Compétences :</h4>
                <div className='skills-line-bloc'>
                  <ul className='ul-skills'>
                    <li className='text-skills'>Node.js</li>
                    <li className='text-skills'>Express</li>
                    <li className='text-skills'>MongoDB</li>
                    <li className='text-skills'>Api REST</li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </section>
        </main>
      <Footer/>
      </div>
    </div>
  );
};

export default Home;

