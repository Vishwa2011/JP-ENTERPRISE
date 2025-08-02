import React from 'react';
import Navbar from './Navbar';
import Facility from '../Components/Facility';
import Instragram from '../Components/Instragram';
import Footer from './Footer';


export default function Login() {
  return (
    <div>
      <Navbar />

      {/* Page Title */}
      {/* <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>Login</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li>Login</li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* Login Section Redesign */}
      <section className="modern-login " style={{paddingTop:'60px',paddingBottom:'60px'}}>
        <div className="container">
          <div className="login-wrapper">
            <div className="login-left">
            
              <img
                src="/assets/pics/login.png"
                alt="Characters" style={{borderRadius:'20px'}}
              />
            </div>

            <div className="login-right">
              <div className="brand">
                <img src="/assets/pics/jp.logo.png" alt="Logo" style={{width:'25%',height:'100%'}}/>
            
              </div>
              
              <h2 style={{justifyContent:'center',display:'flex'}}>Welcome Back</h2>
              <p style={{justifyContent:'center',display:'flex'}}>Please login to your account</p>

              <form className="login-form">
                <input type="email" placeholder="Email address" required />
                <input type="password" placeholder="Password" required />
                <div className="actions">
                  <a href="/Forgot">Forgot Password?</a>
                </div>
                <button type="submit" className="default-btn full-width">Login</button>
               
                <p className="signup-text">
                  Don't have an account? <a href="/Signup">Signup</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Facility />
      <Instragram />
      <Footer />
    </div>
  );
}