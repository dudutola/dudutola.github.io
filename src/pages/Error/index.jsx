import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="back">Go back to Home</Link>
    </div>
  )
};
