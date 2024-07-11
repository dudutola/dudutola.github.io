import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="main__nav">
      <Link to="/" className="main__nav--logo">
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
