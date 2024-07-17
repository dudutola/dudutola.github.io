import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/components/_header.scss";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/portfolio" className="navbar__logo">
        <h1>Dulcelene Machado</h1>
      </Link>
      <div className="navbar__title">
        <h2>Portfolio</h2>
      </div>
      <div className="navbar__links">
        <a href="#my-projects">Projects</a>
        <a href="#my-skills">Skills</a>
        <a href="#my-contact">Contact</a>
      </div>
    </nav>
  );
};
