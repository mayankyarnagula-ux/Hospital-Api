import Login from "./Login";
import Register from "./Register";
import "./Auth.css";

function AuthLanding() {
  return (
    <div className="auth-landing">
      <div className="auth-landing-inner">
        <div className="auth-left">
          <h1>Welcome to HealthCare Plus</h1>
          <p>Sign in to manage appointments, view doctors, and more.</p>
        </div>

        <div className="auth-forms">
          <div className="auth-column">
            <Login />
          </div>

          <div className="auth-column">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLanding;
