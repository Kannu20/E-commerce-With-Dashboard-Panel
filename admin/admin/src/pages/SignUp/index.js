import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaHome, FaTwitter, FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Form submitted:", formData);
    // API call here if needed
    navigate("/dashboard");
  };

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left">
        <h1>BEST UX/UI FASHION <span className="text-sky">
            ECOMMERCE DASHBOARD </span> & ADMIN PANEL</h1>
        <p>
          Elit lusto dolore libero recusandae dolor dolores explicabo ullam cum
          facilis aperiam alias odio quam excepturi molestiae omnis inventore.
        </p>
        <button
          className="home-btn"
          onClick={() => navigate("/")}
        >
          <FaHome /> GO TO HOME
        </button>
      </div>

      {/* Right Section */}
      <div className="right">
        <h2>Register a new account</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <FaUser />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaLock />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-box">
            <FaLock />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <label className="terms">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              required
            />{" "}
            I agree to all Terms & Conditions
          </label>

          <button type="submit" className="signup-btn">
            SIGN UP
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <button
            type="button"
            className="twitter-btn"
            onClick={() => alert("Twitter Login Clicked")}
          >
            <FaTwitter /> Continue with Twitter
          </button>

          <button
            type="button"
            className="facebook-btn"
            onClick={() => alert("Facebook Login Clicked")}
          >
            <FaFacebookF /> Continue with Facebook
          </button>

          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
