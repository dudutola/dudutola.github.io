import { useState } from "react";
import "../../styles/components/_skills.scss";
import git from "../../images/13.png";
import vsc from "../../images/vsc.webp";
import figma from "../../images/Figma-logo.svg";
import github from "../../images/GitHubLogo.svg";

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
      <div className="tools">
        <h2>Tools</h2>
        <div className="tools__icons">
          <img src={git} alt="git" width="300" height="300" />
          <img src={vsc} alt="vsc" width="250" height="250" />
          <img src={figma} alt="figma" width="100" height="100" />
          <img src={github} alt="github" width="150" height="150" />
        </div>
      </div>
    </>
  )
};
