import { Link } from "react-router-dom";
import "../../styles/components/_header.scss";

export const Header = () => {
  return (
    <nav className="navbar">
      <Link to="/portfolio" className="navbar__logo">
        <h1>Dulcelene Machado</h1>
      </Link>
      <div className="navbar__title">
        <h2>Portfolio</h2>
      </div>
      <div className="navbar__links">
        <span>Projects</span>
        <span>Skills</span>
        <span>Contact</span>
      </div>
    </nav>
  )
};
