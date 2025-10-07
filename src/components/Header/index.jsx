import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import "../../styles/components/_header.scss";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrollUpVisible, setScrollUpVisible] = useState(false);
  const menuRef = useRef(null);

  // handle scroll events
  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
    setScrollUpVisible(window.scrollY > 300);
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className={`navbar__logo ${scrolled ? 'hidden' : ''}`}>
          <Link to="/">
            <h1>Dulcelene Machado</h1>
          </Link>
          <p>Développeuse Web</p>
        </div>
        <div className="navbar__title">
          <h2 onClick={scrollToTop}>
            {scrolled ? <span className="new-title">DM</span> : 'Portfolio'}
          </h2>
        </div>
        <div className="navbar__links">
          <a href="https://dulcelene.com/resume/" className={`navbar__links--resume ${scrolled ? 'black-links' : ''}`}>Resume</a>
          <a href="#my-projects" className={`navbar__links--projects ${scrolled ? 'black-links' : ''}`}>Projets</a>
          <a href="#my-skills" className={`navbar__links--skills ${scrolled ? 'black-links' : ''}`}>Skills</a>
          <a href="#my-contact" className={`navbar__links--contact ${scrolled ? 'black-links' : ''}`}>Contact </a>
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

      {isScrollUpVisible && (
        <button className="scroll-up-button" onClick={scrollToTop} aria-label="Scroll to top">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};
