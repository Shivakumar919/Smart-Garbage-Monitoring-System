import "./Home.css";
import {
  FaTrash,
  FaMapMarkerAlt,
  FaExclamationTriangle,
  FaTruck,
  FaBell,
  FaArrowRight,
} from "react-icons/fa";

function Home() {
  return (
    <div className="home">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🌱 EcoBins</div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">Nearby Bins</a></li>
          <li><a href="/">Complaints</a></li>
          <li><a href="/">Requests</a></li>
        </ul>

        <button className="profile-btn">Profile</button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            Smart Garbage
            <span> Monitoring System</span>
          </h1>

          <p>
            Report overflowing bins, request quick waste collection,
            and locate the nearest smart bins in your city.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Request Collection
            </button>

            <button className="secondary-btn">
              Report Complaint
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            ♻️ Keep Your City Clean
          </div>
        </div>
      </section>

      {/* Quick Services */}

      <section className="services">

        <div className="service-card">
          <FaTruck className="icon"/>
          <h3>Quick Collection</h3>
          <p>Request immediate garbage pickup.</p>
        </div>

        <div className="service-card">
          <FaExclamationTriangle className="icon"/>
          <h3>Complaint</h3>
          <p>Report damaged or overflowing bins.</p>
        </div>

        <div className="service-card">
          <FaMapMarkerAlt className="icon"/>
          <h3>Nearby Bins</h3>
          <p>Find the nearest smart dustbin.</p>
        </div>

        <div className="service-card">
          <FaBell className="icon"/>
          <h3>Notifications</h3>
          <p>Track all your requests.</p>
        </div>

      </section>

      {/* Complaint + Request */}

      <section className="forms">

        {/* Complaint */}

        <div className="form-card">

          <h2>
            <FaExclamationTriangle /> Report Complaint
          </h2>

          <input
            type="text"
            placeholder="Complaint Type"
          />

          <input
            type="text"
            placeholder="Location"
          />

          <textarea
            rows="5"
            placeholder="Describe the issue..."
          ></textarea>

          <input type="file"/>

          <button>
            Submit Complaint
          </button>

        </div>

        {/* Request */}

        <div className="form-card">

          <h2>
            <FaTruck /> Quick Collection
          </h2>

          <input
            type="text"
            placeholder="Pickup Address"
          />

          <select>
            <option>Household Waste</option>
            <option>Plastic Waste</option>
            <option>Dry Waste</option>
            <option>Wet Waste</option>
          </select>

          <select>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>

          <textarea
            rows="5"
            placeholder="Additional Notes"
          ></textarea>

          <button>
            Request Pickup
          </button>

        </div>

      </section>

      {/* Nearby */}

      <section className="nearby">

        <div className="nearby-card">

          <h2>
            <FaMapMarkerAlt />
            Nearby Smart Bin
          </h2>

          <div className="map">

            📍 Google Map Here

          </div>

          <div className="bin-info">

            <p><strong>Bin ID:</strong> BIN-105</p>

            <p><strong>Distance:</strong> 120 m</p>

            <p><strong>Status:</strong> 40% Full</p>

          </div>

          <button>
            Navigate
            <FaArrowRight/>
          </button>

        </div>

      </section>

      {/* Dashboard */}

      <section className="dashboard">

        <div className="dash-card">

          <FaTrash className="dash-icon"/>

          <h3>25</h3>

          <p>Total Requests</p>

        </div>

        <div className="dash-card">

          <FaTruck className="dash-icon"/>

          <h3>10</h3>

          <p>Completed</p>

        </div>

        <div className="dash-card">

          <FaBell className="dash-icon"/>

          <h3>4</h3>

          <p>Pending</p>

        </div>

        <div className="dash-card">

          <FaExclamationTriangle className="dash-icon"/>

          <h3>2</h3>

          <p>Complaints</p>

        </div>

      </section>

      <footer>

        © 2026 EcoBins | Smart Garbage Monitoring System

      </footer>

    </div>
  );
}

export default Home;