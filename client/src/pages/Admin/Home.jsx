import "./Home.css";

function Home() {

  return (

    <div className="home">


      {/* NAVBAR */}

      <nav className="navbar">

        <div className="logo">
          🌱 EcoBins
        </div>


        <ul className="nav-links">

          <li>Home</li>

          <li>Features</li>

          <li>Dashboard</li>

          <li>About</li>

          <li>Contact</li>

        </ul>


        <div className="auth-buttons">

          <button className="login">
            Admin Login
          </button>

          <button className="login">
            User Login
          </button>

          <button className="signup">
            Signup
          </button>

        </div>

      </nav>





      {/* HERO SECTION */}


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


          <button className="primary-btn">

            View Dashboard

          </button>

        </div>





        <div className="hero-card">


          <h2>
            Live Bin Status
          </h2>


          <div className="status">

            🗑 Garbage Level

            <span>
              75%
            </span>

          </div>


          <div className="status">

            🌫 Air Quality

            <span>
              Normal
            </span>

          </div>



          <div className="status">

            📍 Location

            <span>
              Zone A
            </span>

          </div>



        </div>


      </section>





      {/* FEATURES */}


      <section className="features">


        <h2>
          System Features
        </h2>


        <div className="cards">



          <div className="card">

            <h1>📡</h1>

            <h3>
              IoT Monitoring
            </h3>

            <p>
              Real-time garbage monitoring using ESP32
              and ultrasonic sensors.
            </p>


          </div>





          <div className="card">

            <h1>🚛</h1>

            <h3>
              Smart Collection
            </h3>

            <p>
              Optimized garbage collection routes for
              better city management.
            </p>


          </div>





          <div className="card">


            <h1>📊</h1>


            <h3>
              Analytics
            </h3>


            <p>
              Track bin status, reports and waste
              collection history.
            </p>



          </div>



        </div>



      </section>



    </div>

  );

}


export default Home;