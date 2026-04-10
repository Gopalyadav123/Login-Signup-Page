import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css'; // The '../' tells it to go UP to the src folder (Correct)
function UserRegister() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 1. Loading State
  const navigate = useNavigate(); // 2. For Success Redirect

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // 3. Password Match Check
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.status === true) {
        alert("Registration successful! Please login.");
        navigate("/"); // 4. Success Redirect to Login
      } else {
        setError(result.msg || "Registration failed");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false); // Stop loading regardless of success/fail
    }
  };

  return (
    <div className="auth-container" style={{ textAlign: "center", marginTop: "50px" }}>
      <form onSubmit={handleRegister}>
        <h2>Create Account</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Confirm Password"
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br /><br />

        {/* 5. Disable button while loading */}
        <button type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        <p>Already have an account? <Link to="/">Login here</Link></p>
      </form>
    </div>
  );
}

export default UserRegister; // Ensure this matches your App.jsx import