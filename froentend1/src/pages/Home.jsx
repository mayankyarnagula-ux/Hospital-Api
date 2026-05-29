import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>HealthCare Plus</h1>
          <p>Your Trusted Multispecialty Hospital</p>
          <p className="hero-subtitle">Quality healthcare at your fingertips</p>
          <div className="hero-buttons">
            <Link to="/doctors" className="btn btn-primary">
              Find a Doctor
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop" 
            alt="Modern Hospital" 
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
    </div>
  );
}

export default Home;