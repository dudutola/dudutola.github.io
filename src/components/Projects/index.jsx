import { useEffect, useState, useRef } from "react";
import "../../styles/components/_projects.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import githubLogo from "../../images/GitHubLogo.svg";

export const Projects = ({ src, alt, figcaption, github, site, name, description, tools }) => {
  const [isHovered, setHovered] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const cardRef = useRef(null);
  const dialogRef = useRef(null);

  // Adjusting screen size states, mobile/tablet
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 767) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (width <= 1024) {
        setIsMobile(false);
        setIsTablet(true);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (!isMobile && !isTablet) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile && !isTablet) setHovered(false);
  };

  const handleClick = () => {
    if (isMobile || isTablet) setHovered(!isHovered);
  };

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        closeDialog();
      }

      if (cardRef.current && !cardRef.current.contains(event.target)) {
        if (isMobile || isTablet) setHovered(false);
      }
    };

    if (isDialogOpen || isHovered) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDialogOpen, isHovered, isMobile, isTablet]);

  return (
    <>
      <figure
        ref={cardRef}
        className={`card ${isMobile || isTablet ? "active" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {!isHovered && (
          <img src={process.env.PUBLIC_URL + src} alt={alt} />
        )}
        {isHovered && (
          <figcaption className="card__description">
            {figcaption}
            <div className="links">
              <Link to={github} target="_blank">
                <img src={githubLogo} alt="Profil Github de Dulcelene" className={isAnimating ? 'link-github vibrate' : 'link-github'} />
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
          <dialog ref={dialogRef} className="dialog" open>
            <h3>{name}</h3>
            <p>{description}</p>
            <div>
              <h4>Outils utilisés:</h4>
              <div className="dialog__tools">
                {tools.map((tool, index) => {
                  const imagePath = `${process.env.PUBLIC_URL}/img/${tool.name}.png`;
                  return <img key={index} src={imagePath} alt={tool.alt} />;
                })}
              </div>
            </div>
            <button className="btn" onClick={closeDialog}>Fermer</button>
          </dialog>
        </div>
      )}
    </>
  );
};
