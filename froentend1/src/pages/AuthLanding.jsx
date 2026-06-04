import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import "./Auth.css";

function AuthLanding() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  return <Login />;
}

export default AuthLanding;