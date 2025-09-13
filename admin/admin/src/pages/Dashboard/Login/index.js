
import { IoMdMail } from "react-icons/io";
import { TiLockClosed } from "react-icons/ti";
import { MdOutlineSecurity } from "react-icons/md";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../../App";

const Login = ()=>{
   
  const context = useContext(MyContext)
  useEffect(()=>{
      context.setisHideSidebarAndHeader(true);
  },[]);
  return(
    
    <div className="login-wrapper">
      <div className="login-box">
        <div className="login-header">
          <div className="logo-circle">
      <img src="https://mironcoder-hotash.netlify.app/images/logo.webp"></img>
          </div>
          
          <h2 className="mb-2">LOGIN PANEL</h2>
          <p className="subtitle">Welcome back! Please login to continue</p>
        </div>
        {/* Logo & Heading */}

        <form>
          {/* Email */}
          <div className="input-group">
            <span className="icon"><IoMdMail /></span>
            <input type="email" placeholder="Email Address" required />
          </div>

          {/* Password */}
          <div className="input-group">
            <span className="icon"><TiLockClosed /></span>
            <input type="password" placeholder="Password" required />
          </div>

          {/* Select Option */}
          <div className="input-group">
            <MdOutlineSecurity />
            <select required>
              <option value="">Select Option</option>
              <option value="1">Admin</option>
              <option value="2">User</option>
            </select>
          </div>

          {/* Sign In */}
          <button className="btn btn-primary" type="submit">
            SIGN IN
          </button>

          {/* Forgot Password */}
          <p className="forgot-password">Forgot Password?</p>

          {/* Divider */}
          <div className="divider"><span>or</span></div>

          {/* Social Buttons */}
           <button type="button" className="twitter-btn">
                      <FaTwitter /> Continue with Twitter
                    </button>
                    <button type="button" className="facebook-btn">
                      <FaFacebookF /> Continue with Facebook
                    </button>
        </form>

        {/* Register */}
        <p className="register">
          Don't have an account? <Link to={'/signUp'} className="register-link">Register</Link>
        </p>
      </div>
    </div>

  )
}

export default Login