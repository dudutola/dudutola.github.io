import { useState } from "react";
import "../../styles/components/_projects.scss";

export const Projects = ({ src, figcation }) => {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  const handleMouseEnter = () => {
    setDescriptionVisible(true)
  };

  const handleMouseLeave = () => {
    setDescriptionVisible(false)
  }

  return (
    <article
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isDescriptionVisible && (
        <img src={process.env.PUBLIC_URL + src} alt="" />
        // <img src={"portfolio/" + src} alt="" />
      )}
      {isDescriptionVisible && (
        <p className="card__description">{figcation}</p>
      )}
    </article>
  )
};
