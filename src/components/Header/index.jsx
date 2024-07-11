import { Link } from "react-router-dom";
import "../../styles/components/_header.scss";

export const Header = () => {
  return (
    <nav className="main__nav">
      <Link to="/portfolio" className="main__nav--logo">
        <h1>Dulcelene Machado</h1>
      </Link>
      <div>
        <h2>Portfolio</h2>
      </div>
      <div>
        <span>Projects</span>
        <span>Skills</span>
        <span>Contact</span>
      </div>
    </nav>
  )
};
