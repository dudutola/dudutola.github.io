import { useState } from "react";
import "../../styles/components/_projects.scss";

export const Projects = ({ src, figcaption }) => {
  const [isHovered, setHovered] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

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
            <button onClick={openDialog}>show</button>
          </figcaption>
        )}
      </figure>

      {isDialogOpen && (
        <div className="dialog-overlay">
          <dialog className="dialog" open>
            <h3>Nom du projet</h3>
            <p>resume du projet</p>
            <p>outil utilise</p>
            <p><a href="https://github.com">GitHub</a></p>
            <p><a href="https://browser.com">Browser</a></p>
            <button onClick={closeDialog}>Close</button>
          </dialog>
        </div>
      )}
    </>
  )
};
