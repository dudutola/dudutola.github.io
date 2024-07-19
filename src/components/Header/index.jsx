import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../../styles/components/_header.scss";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className={`navbar__logo ${scrolled ? 'hidden' : ''}`}>
        <Link to="/portfolio">
          <h1>Dulcelene Machado</h1>
        </Link>
        <p>Développeuse Web</p>
      </div>
      <div className="navbar__title">
        <h2>{scrolled ? <a href="/portfolio" className="new-title">DM</a> : 'Portfolio'}</h2>
      </div>
      <div className="navbar__links">
        <a href="#my-projects" className={`navbar__links--projects ${scrolled ? 'black-links' : ''}`}>Projects</a>
        <a href="#my-skills" className={`navbar__links--skills ${scrolled ? 'black-links' : ''}`}>Skills</a>
        <a href="#my-contact" className={`navbar__links--contact ${scrolled ? 'black-links' : ''}`}>Contact</a>
      </div>
      <div className="dropdown" ref={menuRef}>
        <button
          id="menu"
          onClick={handleMenu}
          className="dropdown-menu"
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon className={`bars ${scrolled ? 'change-color' : ''}`} icon={faBars} />
        </button>
        <ul
          className={`submenu ${isMenuOpen ? 'open' : ''}`}
          aria-label="submenu"
        >
          <li><a href="#my-projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#my-skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#my-contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};
