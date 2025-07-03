import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
import Footer from './Footer'

export default function ShippingPolicy() {
  return (
    <div>
      <Navbar />
        {/* <!-- Start Page Title --> */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>Shipping Policy</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Shipping Policy</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Title --> */}

      {/* <!-- Start Customer Service Area --> */}
      <section className="customer-service-area ptb-100">
        <div className="container">
         <div className="customer-service-content">
  <h3 className="p-0">Shipping Policy – JP Enterprise</h3>
  <ul>
    <li> We provide complimentary shipping on all orders across India.</li>
    <li> Orders are typically delivered within 5–7 working days, based on your location.</li>
    <li> A tracking ID will be shared with you via email once your order is dispatched.</li>
    <li> Please note, we do not offer international shipping at this time.</li>
  </ul>
</div>
        </div>
      </section>
      {/* <!-- End Customer Service Area --> */}
      <Facility />
      <Instragram />
      <Footer />
    </div>
  )
}
