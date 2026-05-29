import { useState } from "react";
import axios from "axios";
import "./Auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000",
        {
          name,
          email,
          password,
        }
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={registerUser} className="auth-form">
      <h2>Register</h2>

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

      <button>Register</button>
    </form>
  );
}

export default Register;