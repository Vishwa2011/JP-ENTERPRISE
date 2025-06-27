import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
import Footer from './Footer'

export default function Signup() {
  return (
    <div>
      <Navbar />
        {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>My Account</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Signup</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start SignUP Area --> */}
        <section className="signup-area ptb-100">
            <div className="container">
                <div className="signup-content">
                    <h2>Create an Account</h2>

                    <form className="signup-form">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" id="fname" name="fname" />
                        </div>

                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" className="form-control" placeholder="Enter your name" id="lname" name="lname" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter your name" id="name" name="name" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter your password" id="password" name="password" />
                        </div>

                        <button type="submit" className="default-btn">Signup</button>

                        <a href="/" className="return-store">or Return to Store</a>
                    </form>
                </div>
            </div>
        </section>
        {/* <!-- End SignUP Area --> */}
      <Facility />
      {/* <Instragram /> */}
      <Footer />
    </div>
  )
}
