import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Footer from './Footer'
import Instragram from '../Components/Instragram'

export default function Vision() {
  return (
    <div>
      <Navbar />
        <div>
        {/* <!-- Start Page Title --> */}
        <div className="page-title-area">
          <div className="container">
            <div className="page-title-content">
              <h2>Vision</h2>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Vision</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- End Page Title --> */}

        {/* <!-- Start About Area --> */}
        <section className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-image">
                  <img
                    src="/assets/pics/vision.jpg"
                    className="shadow"
                    alt="image"
                  />
                
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
               <div className="about-content">
  <span className="sub-title">Our Vision</span>
  <h2>Shaping a Rodent-Free Future with Innovation & Integrity</h2>
  <h6>
    Leading the Way in Eco-Friendly and Technologically Advanced Pest Solutions
  </h6>

  <p>
    At <strong>JP Enterprise</strong>, our vision is to become a global leader in rodent control by continuously innovating and delivering intelligent, sustainable, and humane pest management solutions.
  </p>

  <p>
    We envision a world where every home, business, and vehicle is protected from rodent threats without the use of harmful chemicals or traditional traps — using safe, science-backed technologies.
  </p>

  <p>
    Our long-term goal is to raise awareness about the benefits of ultrasonic pest control and promote environmentally responsible living through reliable, effective, and user-friendly products.
  </p>

  <p>
    By staying committed to research, quality, and customer trust, JP Enterprise aims to redefine pest control standards and contribute to a healthier, cleaner future for generations to come.
  </p>
</div>

              </div>
              
            </div>
          </div>
        </section>
        {/* <!-- End About Area --> */}
      </div>
      <Facility />
      <Instragram />
      <Footer />
    </div>
  )
}
