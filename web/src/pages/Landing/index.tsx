import React from 'react';

// import { Container } from './styles';
import Logo from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Landing: React.FC = () => {
  return (
    <div id="page-lading">
      <div id="page-lading" className="container">
        <div className="logo-container">
          <img src={Logo} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
          <img 
            src={LandingImg} 
            alt="Plataforma de ensino" 
            className="hero-img"
          />
        </div>
        <div className="button-container">
          <a href="" className="study">
            <img src={StudyIcon} alt="Estudar"/>
            Estudar
          </a>
        </div><div className="button-container">
          <a href="" className="study">
            <img src={GiveClassesIcon} alt="Estudar"/>
            Estudar
          </a>
        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={PurpleHeartIcon} alt="Coração roxo"/>
        </span>
      </div>
    </div>
  );
}

export default Landing;