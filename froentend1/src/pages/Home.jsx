import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to HealthCare Plus</h1>
          <p>Your trusted health companion after login.</p>
          <p className="hero-subtitle">Book appointments, view doctors, and manage your care in one place.</p>
          <div className="hero-buttons">
            <Link to="/doctors" className="btn btn-primary">
              Find a Doctor
            </Link>
            <Link to="/patient" className="btn btn-secondary">
              My Dashboard
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1580281657521-62bcd86aa8b3?w=900&h=600&fit=crop"
            alt="Healthcare team"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Specialties</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏥</div>
            <h3>Cardiology</h3>
            <p>Expert heart and cardiovascular care</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🧠</div>
            <h3>Neurology</h3>
            <p>Advanced neurological treatments</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🦴</div>
            <h3>Orthopedics</h3>
            <p>Bone and joint specialization</p>
          </div>
          <div className="service-card">
            <div className="service-icon">👶</div>
            <h3>Pediatrics</h3>
            <p>Comprehensive child healthcare</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔬</div>
            <h3>Laboratory</h3>
            <p>State-of-the-art diagnostics</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🚑</div>
            <h3>Emergency</h3>
            <p>24/7 emergency care services</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>✓ Expert Doctors</h3>
            <p>Highly qualified and experienced medical professionals</p>
          </div>
          <div className="feature">
            <h3>✓ Modern Equipment</h3>
            <p>Latest medical technology and facilities</p>
          </div>
          <div className="feature">
            <h3>✓ 24/7 Support</h3>
            <p>Round-the-clock patient care and assistance</p>
          </div>
          <div className="feature">
            <h3>✓ Easy Booking</h3>
            <p>Simple online appointment scheduling system</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Book an Appointment?</h2>
        <p>Browse our doctors and schedule your visit today</p>
        <Link to="/doctors" className="btn btn-large">
          Get Started Now
        </Link>
      </section>

      <section className="dashboard-section">
        <h2>Quick Access</h2>
        <div className="dashboard-grid">
          <Link to="/doctors" className="dashboard-card">
            <div className="dashboard-icon">👨‍⚕️</div>
            <h3>Doctors</h3>
            <p>Browse specialists and choose your preferred doctor.</p>
          </Link>
          <Link to="/patient" className="dashboard-card">
            <div className="dashboard-icon">📋</div>
            <h3>Patient Dashboard</h3>
            <p>View your profile, upcoming bookings, and health history.</p>
          </Link>
          <Link to="/history" className="dashboard-card">
            <div className="dashboard-icon">🕒</div>
            <h3>Appointment History</h3>
            <p>Track your previous visits and appointment details.</p>
          </Link>
          <Link to="/contact" className="dashboard-card">
            <div className="dashboard-icon">✉️</div>
            <h3>Contact Us</h3>
            <p>Get help or ask questions from our support team.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;