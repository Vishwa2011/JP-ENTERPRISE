import React from 'react';
import Navbar from './Navbar';
import Facility from '../Components/Facility';
import Instragram from '../Components/Instragram';
import Footer from './Footer';

export default function Signup() {
  return (
    <div>
      <Navbar />

      {/* Page Title */}
      {/* <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>My Account</h2>
            <ul>
              <li><a href="/">Home</a></li>
              <li>Signup</li>
            </ul>
          </div>
        </div>
      </div> */}

      {/* Signup Area */}
   <section className="signup-area " style={{paddingTop:'60px',paddingBottom:'60px'}}>
  <div className="container">
    <div className="signup-contents">
      {/* Left Image Box */}
     
    <div className="signup-form-boxes">
        <h2 style={{marginBottom:'15px'}}>Create an Account</h2>

        <form className="signup-form">
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              id="fname"
              name="fname"
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              id="lname"
              name="lname"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your name"
              id="name"
              name="name"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              id="password"
              name="password"
            />
          </div>

          <button type="submit" className="default-btn">Signup</button>

          <a href="/Login" style={{textDecoration:'underline'}} >Back to Login</a>
        </form>
      </div>
      {/* Right Signup Form */}

 <div className="signup-image-boxes">
        <img src="/assets/pics/createacc.png" alt="Characters" style={{borderRadius:'20px'}} />
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