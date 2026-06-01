import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthChange = () => setIsLoggedIn(!!localStorage.getItem("token"));
    window.addEventListener("authChange", handleAuthChange);
    return () => window.removeEventListener("authChange", handleAuthChange);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("authChange"));
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={isLoggedIn ? "/home" : "/login"} className="navbar-logo">
          🏥 HealthCare Plus
        </Link>

        <ul className="nav-menu">
          {isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/doctors" className="nav-link">Doctors</Link>
              </li>
              <li className="nav-item">
                <Link to="/admin" className="nav-link">Admin</Link>
              </li>
              <li className="nav-item">
                <Link to="/patient" className="nav-link">Patient Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link to="/history" className="nav-link">Appointment History</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link nav-link-btn" onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link nav-link-btn">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link nav-link-btn-primary">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;