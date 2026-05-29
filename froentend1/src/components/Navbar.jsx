import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🏥 HealthCare Plus
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/doctors" className="nav-link">Doctors</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link nav-link-btn">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link nav-link-btn-primary">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;