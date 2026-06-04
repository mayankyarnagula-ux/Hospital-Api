import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      await axios.post(
        "https://hospital-api-back.onrender.com/api/auth/register",
        {
          name,
          email,
          password,
        }
      );

      const loginRes = await axios.post(
        "https://hospital-api-back.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      setMessage("Registration successful. Redirecting to home...");
      localStorage.setItem("token", loginRes.data.token);
      localStorage.setItem("user", JSON.stringify(loginRes.data.user));
      window.dispatchEvent(new Event("authChange"));
      navigate("/home", { replace: true });
    } catch (err) {
      const msg =
        err?.response?.data?.message ||
        "Registration failed. Please check your details and try again.";
      setError(msg);
      console.error(err);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-landing-centered">
        <div className="auth-form-container">
          <form onSubmit={registerUser} className="auth-form">
            <h2>Register</h2>

            {message && <div className="auth-success">{message}</div>}
            {error && <div className="auth-error">{error}</div>}

            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />

            <br />
            <br />

            <input
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <br />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>

            <br />
            <br />

            <button type="submit">Register</button>

            <div className="auth-switch-line">
              <span>Already have an account?</span>
              <Link to="/login">Login </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;