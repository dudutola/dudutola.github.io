import { useEffect, useState } from "react";
import "../../styles/components/_projects.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

import githubLogo from "../../images/GitHubLogo.svg";

export const Projects = ({ src, figcaption, github, site, name, description, tools }) => {
  const [isHovered, setHovered] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setIsAnimating(true);
      }, 2000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <figure
        className="card"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!isHovered && (
          <img src={process.env.PUBLIC_URL + src} alt="" />
          // <img src={"portfolio/" + src} alt="" />
        )}
        {isHovered && (
          <figcaption className="card__description">
            {figcaption}
            <div className="links">
              <Link to={github} target="_blank">
                <img src={githubLogo} alt="" className={isAnimating ? 'link-github vibrate' : 'link-github'} />
              </Link>
              {site &&
                <Link to={site} target="_blank">
                  <FontAwesomeIcon icon={faPaperclip} className={isAnimating ? 'paperClip vibrate' : 'paperClip'} />
                </Link>
              }
            </div>
            <div className="position">
              <span onClick={openDialog} className="position__plus">
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </div>
          </figcaption>
        )}
      </figure>

      {isDialogOpen && (
        <div className="dialog-overlay">
          <dialog className="dialog" open>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className="dialog__tools">
              <h4>Outils utilisés:</h4>
              {tools.map((tool, index) => {
                return <img key={index} src={process.env.PUBLIC_URL + "/img/" + tool + ".png"} alt="" />
              })}
            </div>
            <button onClick={closeDialog}>Close</button>
          </dialog>
        </div>
      )}
    </>
  )
};
