import "../../styles/components/_footer.scss";
import { Link } from "react-router-dom";
import github from "../../images/GitHubLogo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Link to="https://github.com/dudutola">
        <img src={github} alt="" className="footer__icon" />
      </Link>
      <div className="footer__content">
        <p className="footer__content--text">&copy; 2024 Dulcelene Machado |</p>
        <p className="footer__content--text">Tous droits réservés</p>
      </div>
    </footer>
  )
};
