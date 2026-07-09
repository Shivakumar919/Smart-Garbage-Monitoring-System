import "./signup.css";

function Signup() {

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-left">
          <h1>🌱 EcoBins</h1>
          <h2>
            Create Account
          </h2>
          <p>
            Join Smart Garbage Monitoring System and manage
            waste collection efficiently.
          </p>
        </div>
        <form className="signup-form">
          <h2>
            Sign Up
          </h2>
          <input 
            type="text"
            placeholder="Full Name"
          />
          <input
            type="email"
            placeholder="Email Address"
          />
          <input
            type="password"
            placeholder="Password"
          />
          <button>
            Create Account
          </button>
          <p className="login-link">
            Already have an account?
            <span> Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Signup;