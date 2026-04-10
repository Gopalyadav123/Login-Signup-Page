import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Fixed: Combined imports
import '../App.css'; // The '../' tells it to go UP to the src folder (Correct)
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      // NOTE: Make sure the URL matches your actual working backend API
      const response = awaitfetch("http://localhost:5000/api/login", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.status === true) {
        localStorage.setItem("userToken", result.token); 
        navigate("/dashboard"); 
      } else {
        setError(result.msg || "Login failed"); // API usually sends 'msg'
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-container" style={{ textAlign: "center", marginTop: "50px" }}>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        
        <button type="submit">Login</button>
        
        {/* Fixed: Changed <link> to <Link> (Capital L) */}
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;