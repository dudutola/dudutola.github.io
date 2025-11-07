import "../../styles/components/_banner.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
// import aboutMe from "../../images/me2.webp";
// import aboutMe from "../../images/profile-bw.webp";
import aboutMe from "../../images/profile-color.webp";
import { useEffect, useState } from "react";

export const Banner = () => {
  const [isFirstTitleVisible, setFirstTitleVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstTitleVisible(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner">
      <div className="banner__description">
        <div className="titles">
          <h2 className={`fade-in ${isFirstTitleVisible ? 'visible' : ''}`}>
            Transformez vos idées <br />en réalité numérique
          </h2>
          <h2 className={`fade-in ${!isFirstTitleVisible ? 'visible' : ''}`}>
            {/* Développeuse Frontend */}
            Développeuse Full-Stack
          </h2>
        </div>
        <div className="banner__about-me">
          <p>En combinant créativité artistique et compétences techniques, je crée des expériences numériques engageantes.</p>
          <div className="circle">
            <img src={aboutMe} alt="Développeuse frontend Dulcelene" width={400} height={400}/>
          </div>
        </div>
        <div className="arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
    </section>
  );
};
