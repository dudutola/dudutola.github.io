// import { useState } from "react";
import "../../styles/components/_skills.scss";
import git from "../../images/13.png";
import vsc from "../../images/vsc.webp";
import figma from "../../images/Figma-logo.svg";
import github from "../../images/GitHubLogo.svg";

export const Skills = () => {
  // const [isMoving, setIsMoving] = useState(true);

  // const handleCardMouseEnter = () => {
  //   setIsMoving(false);
  // };

  // const handleCardMouseLeave = () => {
  //   setIsMoving(true);
  // };

  const languages = [
    {
      name: 'Html',
      description: 'ceci est une description',
    },
    {
      name: 'Css',
      description: 'ceci est une description',
    },
    {
      name: 'JS',
      description: 'ceci est une description',
    },
    {
      name: 'Scss',
      description: 'ceci est une description',
    },
    {
      name: 'React',
      description: 'ceci est une description',
    },
    {
      name: 'Redux',
      description: 'ceci est une description',
    }
  ];


  return (
    <>
      <div className="skills__cards">
          {languages.map((language, index) => {
              return <div className="card-skill" key={index}>
                <div className="card-title">
                  <h3>{language.name}</h3>
                </div>
                {/* <div className="card-description">
                  <h3>{language.description}</h3>
                </div> */}
              </div>
          })}
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
