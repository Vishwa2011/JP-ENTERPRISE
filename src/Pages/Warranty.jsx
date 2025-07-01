import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Facility from '../Components/Facility'

const Warranty = () => {
  return (
    <>
        <Navbar />

        
              <div>
                {/* <!-- Start Page Title --> */}
                <div className="page-title-area">
                  <div className="container">
                    <div className="page-title-content">
                      <h2>Warranty</h2>
                      <ul>
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>Warranty</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!-- End Page Title --> */}


                <div className="flex items-center space-x-2" style={{justifyContent:'center',display:'flex',paddingTop:'65px'}}>
  <input
    type="text"
    placeholder="Search here..."
    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" style={{background:'rgb(245, 63, 133)',border:'rgb(245, 63, 133)'}}>
    Search
  </button>
</div>

        
                {/* <!-- Start About Area --> */}
                <section className="about-area ptb-100">
                  <div className="container">
                    <div className="row align-items-center justify-content-center">
                      <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                          <img
                            src="/assets/pics/about1.jpg"
                            className="shadow"
                            alt="image"
                          />
                          <img
                            src="/assets/pics/about (1).png"
                            className="shadow"
                            alt="image"
                          />
                        </div>
                      </div>
        
                      <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                          <span className="sub-title">Warranty</span>
                          <h2>
                            JP Enterprise – Trusted Name in Rat Repellent Solutions
                          </h2>
                          <h6>
                            JP Enterprise offers advanced ultrasonic rat repellent
                            devices for every need.
                          </h6>
                          <p>
                            <strong>JP Enterprise</strong> is committed to protecting
                            your home, office, warehouse, and vehicle from rodent damage
                            using cutting-edge technology.
                          </p>
                          <p>
                            Our powerful devices are safe, effective, and chemical-free
                            — designed to prevent costly damage and provide peace of
                            mind.
                          </p>
        
                          <div className="features-text">
                            <h5>
                              <i className="bx bx-shield-quarter"></i> Trusted by
                              Thousands Across India
                            </h5>
                            <p>
                              We deliver hassle-free service and quality rat control
                              solutions right to your doorstep, with support you can
                              count on.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
        
                  </div>
                </section>
                {/* <!-- End About Area --> */}
        
            
        
        
                <Facility />
               
              </div>
        <Footer />
    </>
  )
}

export default Warranty
