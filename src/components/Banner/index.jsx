import "../../styles/components/_banner.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import me from "../../images/flower.jpg";
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
            Développeuse Frontend
          </h2>
        </div>
        <p>En combinant créativité artistique et compétences techniques, je crée des expériences numériques engageantes.</p>
        <div className="arrow">
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
      <div className="banner__me">
        <img src={me} alt="dulcelene" />
      </div>
    </section>
  );
};
