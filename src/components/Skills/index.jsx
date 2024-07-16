import { useState } from "react";
import "../../styles/components/_skills.scss";

export const Skills = () => {
  const [isMoving, setIsMoving] = useState(true);

  const handleCardMouseEnter = () => {
    setIsMoving(false);
  };

  const handleCardMouseLeave = () => {
    setIsMoving(true);
  };

  const languages = [
    'Html',
    'Css',
    'JS',
    'Scss',
    'React',
    'Redux'
  ];


  return (
    <>
      <div className="skills_wrapper">
        <div className={`skills__cards ${isMoving ? 'moving' : ''}`}>
        {languages.map((language, index) => (
            <div
              key={index}
              className={`card-skill ${index % 2 === 0 ? 'top' : 'bottom'}`} onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              {language}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Tools</h2>
          <img src="" alt="git" />
          <img src="" alt="vsc" />
          <img src="" alt="figma" />
          <img src="" alt="github" />
      </div>
    </>
  )
};
