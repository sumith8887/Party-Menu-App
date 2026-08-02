import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

import "./SignIn.css";

function SignIn() {
  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("admin123");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await signIn(email, password);

      if (response.success) {
        login(response.data.token, response.data.user);
        navigate("/");
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="signin-container">
      <div className="signin-card">

        <h1>🍽 Party Menu</h1>

        <p>
          Sign in to explore our delicious menu
        </p>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">

            {loading ? "Signing in..." : "Sign In"}

          </button>

        </form>

      </div>
    </div>
  );
}

export default SignIn;