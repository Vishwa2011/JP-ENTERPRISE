import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
import Footer from './Footer'

export default function Login() {
  return (
    <div>
      <Navbar />

         {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>Login</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>Login</li>
                    </ul>
                </div>
            </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start Login Area --> */}
        <section className="login-area ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="login-content">
                            <h2>Login</h2>

                            <form className="login-form">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Username or email address" />
                                </div>

                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" />
                                </div>

                                <button type="submit" className="default-btn">Login</button>

                                <a href="/Forgot" className="forgot-password">Forgot your password?</a>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="new-customer-content">
                            <h2>New Customer</h2>

                            <span>Create A Account</span>
                            <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be able to order from our shop. To start shopping click register.</p>
                            <a href="/Signup" className="optional-btn">Create A Account</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End Login Area --> */}

      <Facility />
      <Instragram />
      <Footer />
    </div>
  )
}
