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
     <div className={`navbar__logo ${scrolled ? 'hidden' : ''}`}>
        <Link to="/portfolio">
          <h1>Dulcelene Machado</h1>
        </Link>
        <p>Développeuse Web</p>
      </div>
      <div className="navbar__title">
        <h2>{scrolled ? <span className="new-title">DM</span> : 'Portfolio'}</h2>
      </div>
      <div className="navbar__links">
        <a href="#my-projects" className={`navbar__links--projects ${scrolled ? 'black-links' : ''}`}>Projects</a>
        <a href="#my-skills" className={`navbar__links--skills ${scrolled ? 'black-links' : ''}`}>Skills</a>
        <a href="#my-contact" className={`navbar__links--contact ${scrolled ? 'black-links' : ''}`}>Contact</a>
      </div>
      <div className="dropdown">
        <button id="menu">Menu</button>
        <ul className="submenu" aria-label="submenu">
          <li><a href="#my-projects" className="">Projects</a></li>
          <li><a href="#my-skills" className="">Skills</a></li>
          <li><a href="#my-contact" className="">Contact</a></li>
        </ul>
      </div>

    </nav>
  );
};
