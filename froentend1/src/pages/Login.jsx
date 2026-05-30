import { useState } from "react";
import axios from "axios";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://hospital-api-back.onrender.com/api/auth/login",
        {
          email,
          password,
        }
      );

      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={loginUser} className="auth-form">
      <h2>Login</h2>

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

      <button>Login</button>
    </form>
  );
}

export default Login;