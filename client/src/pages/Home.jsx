import "./home.css";
import Footer from "./Footer"
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Home() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>    <div className="home">

      {/* Navbar */}
      <nav className="navbar">

        <div className="logo">
          🌱 EcoBins
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>Home</li>
          <li>Features</li>
          <li>Dashboard</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="auth-buttons">
          <button
            className="login"
            onClick={() => navigate("/login")}
          >
            Login
          </button>

          <button
            className="signup"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

      </nav>


      {/* Hero */}

      <section className="hero">

        <div className="hero-content">

          <h1>
            Smart Garbage Monitoring System
          </h1>

          <p>
            IoT based smart waste management system using ESP32
            sensors to monitor garbage levels, harmful gases and
            optimize waste collection routes.
          </p>

          <button
            className="primary-btn"
            onClick={() => navigate("/dashboard")}
          >
            View Dashboard
          </button>

        </div>


    

      </section>


      {/* Features */}

      <section className="features">

        <h2>System Features</h2>

        <div className="cards">

          <div className="card">
            <h1>📡</h1>
            <h3>IoT Monitoring</h3>
            <p>
              Real-time garbage monitoring using ESP32
              and ultrasonic sensors.
            </p>
          </div>


          <div className="card">
            <h1>🚛</h1>
            <h3>Smart Collection</h3>
            <p>
              Optimized garbage collection routes for
              better city management.
            </p>
          </div>


          <div className="card">
            <h1>📊</h1>
            <h3>Analytics</h3>
            <p>
              Track bin status, reports and waste
              collection history.
            </p>
          </div>


          <div className="card">
            <h1>🌫</h1>
            <h3>Gas Detection</h3>
            <p>
              Detect harmful gases and send alerts.
            </p>
          </div>

        </div>

      </section>

    </div>   
     <Footer/> </>



  );
}

export default Home;