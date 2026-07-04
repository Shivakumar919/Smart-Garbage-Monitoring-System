import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Smart Garbage Monitoring System</h1>
          <p>
            An IoT based intelligent waste management solution using ESP32,
            sensors, and real-time monitoring to build cleaner and smarter cities.
          </p>

          <div className="hero-buttons">
            <button>View Dashboard</button>
            <button className="outline">Learn More</button>
          </div>
        </div>

        <div className="hero-card">
          <h3>Smart Bin Status</h3>

          <div className="status">
            <span>Garbage Level</span>
            <b>75%</b>
          </div>

          <div className="progress">
            <div></div>
          </div>

          <p>Gas Level : Normal</p>
          <p>Status : Active 🟢</p>
        </div>
      </section>


      {/* Features */}
      <section className="features">

        <h2>Key Features</h2>

        <div className="feature-grid">

          <div className="feature-card">
            <h3>📡 Real-Time Monitoring</h3>
            <p>
              Track garbage level and environmental conditions instantly.
            </p>
          </div>


          <div className="feature-card">
            <h3>🗑 Smart Detection</h3>
            <p>
              Ultrasonic sensors detect bin capacity automatically.
            </p>
          </div>


          <div className="feature-card">
            <h3>🌱 Odor Detection</h3>
            <p>
              Gas sensors identify harmful gases and send alerts.
            </p>
          </div>


          <div className="feature-card">
            <h3>📊 Analytics</h3>
            <p>
              Helps optimize waste collection and reduce overflow.
            </p>
          </div>

        </div>

      </section>



      {/* Working */}
      <section className="working">

        <h2>How It Works</h2>

        <div className="steps">

          <div>
            <h1>01</h1>
            <p>Sensors collect garbage and gas data</p>
          </div>

          <div>
            <h1>02</h1>
            <p>ESP32 processes sensor information</p>
          </div>

          <div>
            <h1>03</h1>
            <p>Dashboard displays real-time status</p>
          </div>

        </div>

      </section>


      {/* Footer */}
      <footer>
        © 2026 Smart Garbage Monitoring System | IoT Project
      </footer>

    </div>
  );
}

export default Home;