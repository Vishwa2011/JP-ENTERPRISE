import React from 'react'
import Navbar from './Navbar'
import Facility from '../Components/Facility'
import Instragram from '../Components/Instragram'
import Footer from './Footer'

export default function ReturnPolicy() {
  return (
    <div>
      <Navbar />
          {/* <!-- Start Page Title --> */}
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h2>Return Policy</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Return Policy</li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- End Page Title --> */}

      {/* <!-- Start Customer Service Area --> */}
      <section className="customer-service-area ptb-100">
        <div className="container">
      <div className="customer-service-content">
  <h3 className="p-0">Return Policy – JP Enterprise</h3>
  <ul>
    <li>🛡️ We offer a 7-day hassle-free return policy for all eligible products.</li>
    <li>📦 Items must be unused and returned in their original packaging to qualify.</li>
    <li>💸 Refunds are initiated within 7–10 business days after receiving the returned item.</li>
    <li>📧 For return requests, please contact us at jpexport42@gmail.com.</li>
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
