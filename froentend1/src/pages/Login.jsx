import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
      const res = await axios.post(
        "https://hospital-api-back.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      setMessage(res.data.message || "Login successful.");
      localStorage.setItem("token", res.data.token);
      window.dispatchEvent(new Event("authChange"));
      setTimeout(() => {
        navigate("/home");
      }, 500);
    } catch (err) {
      const invalidMessage =
        err?.response?.data?.message ||
        "Invalid email or password. Please try again.";
      setError(invalidMessage);
      console.error(err);
    }
  };

  return (
      <form onSubmit={loginUser} className="auth-form">
       <h2>Login</h2>

      {message && <div className="auth-success">{message}</div>}
      {error && <div className="auth-error">{error}</div>}

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

      <button type="submit">Login</button>

      <p style={{ marginTop: 12, fontSize: 14, textAlign: "center" }}>
        New here? <Link to="/register">Register now</Link>
      </p>
      </form>
  );
}

export default Login;